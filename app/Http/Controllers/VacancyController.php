<?php

namespace App\Http\Controllers;

use App\Vacancy;
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
    public function index()
    {
        //
        return VacancyResource::collection( Vacancy::paginate(12));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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
    public function show($vacancy)
    {
        //
        //
        $vacancy= $this->repo->showVacancy($vacancy);

        return $vacancy;
    }

    /**
     * search
     *
     * @param Request $request
     * @return void
     */
    public function search(Request $request)
    {
        $results = $this->repo->searchVacancies($request->input('search'));

        // TODO: Fail gracefully incase of error
        // Fire vacancy
        // vacancy( new SearchVacancies($results));

        // 
        return $results;
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Vacancy  $vacancy
     * @return \Illuminate\Http\Response
     */
    public function destroy($vacancy)
    {
        //
        $vacancy = $this->repo->deleteVacancy($vacancy);

        event(new VacancyDeleted());

        return (string)$vacancy;
    }
}
