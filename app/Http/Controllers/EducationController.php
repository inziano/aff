<?php

namespace App\Http\Controllers;

use App\User;
use App\Education;
use Illuminate\Http\Request;
use App\Repositories\EducationRepository;
use Carbon\Carbon;

class EducationController extends Controller
{
    public function __construct(EducationRepository $repo)
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
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {      
        // Validate
        $this->validate(request(),[
            'institution'=> 'string',
            'startdate'=> 'string',
            'enddate'=> 'string',
            'degree'=> 'string',
            'field_of_study'=> 'string',
            'description'=> 'string'
        ]);
    
        $newstartdate = Carbon::parse($request->input('startdate'))->toDateTimeString();

        $newenddate = Carbon::parse($request->input('enddate'))->toDateTimeString();

        $request->merge(['startdate'=>$newstartdate, 'enddate'=>$newenddate]);

        $edu = $this->repo->createEducation($request);
      
        return $edu;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function show($education)
    {
        //
        $edu = $this->repo->findEducation($education);
        //return edu of specific user
        return $edu;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function edit(Education $education)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Education $education )
    {
        //
        $newstartdate = Carbon::parse($request->input('startdate'))->toDateTimeString();

        $newenddate = Carbon::parse($request->input('enddate'))->toDateTimeString();

        $request->merge(['startdate'=>$newstartdate, 'enddate'=>$newenddate]);

        $this->repo->updateEducation($education,$request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function destroy(Education $education)
    {
        //
        $this->repo->deleteEducation($education);
    }
}
