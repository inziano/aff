<?php

namespace App\Http\Controllers;

use App\Bio;
use App\User;
use App\Filters\BioFilters;
use Illuminate\Http\Request;
use App\Repositories\BioRepository;

class BioController extends Controller
{
    // Construct
    public function __construct( BioRepository $repo, BioFilters $filter )
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
        // //validate
        // $this->validate(request(), [
        //     'firstname' => 'string',
        //     'lastname' => 'string',
        //     'surname' => 'string',
        //     'title' => 'string',
        //     'gender' => 'string',
        //     'dob' => 'date',
        //     'phone' => 'integer',
        //     'altphone' => 'integer',
        //     'altemail'  => 'string',
        //     'address' => 'string',
        //     'citizenship' => 'string',
        //     'residency' => 'string',
        //     'qualification' => 'string',
        //     'field_of_study' => 'string'
        // ]);
        // Ensure user id exists
        if ( User::where('id', $request->input('user_id'))->exists())
        {
            // Push to repo
            $bio = $this->repo->createBio($request);

        } else 
        {
            //return error 
            $bio = abort(404);
        }
      
        // return 
        return $bio;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bio  $bio
     * @return \Illuminate\Http\Response
     */
    public function show($bio)
    {
        $bio = $this->repo->findBio($bio);
        //return bio of specific user
        return $bio;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bio  $bio
     * @return \Illuminate\Http\Response
     */
    public function edit(Bio $bio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bio  $bio
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bio $bio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bio  $bio
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bio $bio)
    {
        //
    }
}
