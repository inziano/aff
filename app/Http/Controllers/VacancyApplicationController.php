<?php

namespace App\Http\Controllers;

use App\VacancyApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Repositories\VacancyApplicationRepository;
use App\User;
use App\Events\VacancyApplicationSubmitted;

class VacancyApplicationController extends Controller
{
    public function __construct( VacancyApplicationRepository $repo)
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
        return VacancyApplicationResource::collection( VacancyApplication::all()->paginate(12));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // //Check if all fields are included
        $this->validate(request(),[
            'vacancy_id' => 'required',
            'user_id' => 'required',
        ]);

        // Title
        $title = User::where('id',$request->input('user_id') )->first()->username;

        // Store to db
        $respath = Storage::cloud()->putFileAs('resume',$request->file('res'), $title.'.'.$request->file('res')->extension());
        $coverpath = Storage::cloud()->putFileAs('coverletter',$request->file('cover'), $title.'.'.$request->file('cover')->extension());

        // dd($respath);

        // Append to request
        $request->request->add(['resume' => $respath ,'cover_letter' => $coverpath]);

        // Store
        $vacancyapp = $this->repo->createVacancyApplication($request);
        // Fire event
        event( new VacancyApplicationSubmitted((int)$vacancyapp->vacancy_id));

        return $vacancyapp;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\VacancyApplication  $vacancyApplication
     * @return \Illuminate\Http\Response
     */
    public function show($vacancyApplication)
    {
        //
        //
        $vacancyapplication = $this->repo->showVacancyapplication($vacancyApplication);

        return $vacancyapplication;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\VacancyApplication  $vacancyApplication
     * @return \Illuminate\Http\Response
     */
    public function edit(VacancyApplication $vacancyApplication)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\VacancyApplication  $vacancyApplication
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VacancyApplication $vacancyApplication)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\VacancyApplication  $vacancyApplication
     * @return \Illuminate\Http\Response
     */
    public function destroy(VacancyApplication $vacancyApplication)
    {
        //
    }
}
