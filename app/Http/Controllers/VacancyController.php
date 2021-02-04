<?php

namespace App\Http\Controllers;

use App\Vacancy;
use App\Filters\VacancyFilters;
use Illuminate\Http\Request;
use App\Events\VacancyCreated;
use App\Events\VacancyDeleted;
use App\Repositories\VacancyRepository;
use App\Http\Resources\Vacancy as VacancyResource;
use Carbon\Carbon;

class VacancyController extends Controller
{
    public function __construct(VacancyRepository $repo)
    {
        $this->repo = $repo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, VacancyFilters $filters)
    {
        $this->authorize('viewAny', Vacancy::class);
        //
        return VacancyResource::collection( Vacancy::filter($filters)->paginate(12));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('create', Vacancy::class);
        //Store
        $this->validate(request(),[
            'deadline'=> 'required',
            'title'=> 'required',
            'location'=> 'required',
            'description'=> 'required'
        ]);

        $newdeadline = Carbon::parse($request->input('deadline'))->toDateTimeString();

        $request->merge(['deadline'=>$newdeadline]);
        // Push
        $vacancy = $this->repo->createVacancy($request);

        // Fire vacancycreated
       event( new VacancyCreated());

        return $vacancy;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Vacancy $vacancy
     * @return \Illuminate\Http\Response
     */
    public function show(Vacancy $vacancy)
    {
        $this->authorize('view', $vacancy);
        //
        $vacancy= $this->repo->showVacancy($vacancy->id);

        return $vacancy;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Vacancy  $vacancy
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vacancy $vacancy)
    {
        $this->authorize('update',$vacancy);
        //
        if ( $request->has('deadline') ) {

            $newdeadline = Carbon::parse($request->input('deadline'))->toDateTimeString();

            $request->merge(['deadline'=>$newdeadline]);
           
            // Push
            return $this->repo->updateVacancy($request);

        }else {
            return $this->repo->updateVacancy($request);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Vacancy  $vacancy
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vacancy $vacancy)
    {
        $this->authorize('delete', $vacancy);
        //
        $vacancy = $this->repo->deleteVacancy($vacancy);

        event(new VacancyDeleted());

        return (string)$vacancy;
    }
}
