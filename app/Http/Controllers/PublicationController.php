<?php

namespace App\Http\Controllers;

use App\Publication;
use Illuminate\Http\Request;
use App\Repositories\PublicationRepository;
use App\Http\Resources\Publication as PubResource;
use Illuminate\Support\Facades\Storage;

class PublicationController extends Controller
{
    public function __construct( PublicationRepository $repo)
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
        //display all
        return PubResource::collection(Publication::all());
    }

   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Check if all fields are included
        $this->validate(request(),[
            'author' => 'required',
            'title' => 'required',
            'publisher' => 'required',
            'abstract' => 'required',
        ]);

        // Title
        $title = $request->input('title');
        // Store to db
        $pubpath = Storage::cloud()->putFileAs('publication',$request->file('publication'), $title.'.'.$request->file('publication')->extension());

        // Append to request
        $request->request->add(['pubpath' =>$pubpath]);
        $request->merge(['user_id'=>1]);

        // Store
        $publication = $this->repo->createPublication($request);

        return $publication;
    }

    /**
     * downloadpub
     *
     * @param mixed $id
     * @return void
     */
    public function download($id)
    {
        if ( Publication::where('id',$id)->exists()){
            // Get url
            $path = Publication::where('id',$id)->first()->pubpath;
            $name = Publication::where('id',$id)->first()->only('title');
            // return $path;
            return Storage::cloud()->response($path);

        } else{
            
            return abort(404);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Publication  $publication
     * @return \Illuminate\Http\Response
     */
    public function show(Publication $publication)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Publication  $publication
     * @return \Illuminate\Http\Response
     */
    public function edit(Publication $publication)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Publication  $publication
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Publication $publication)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Publication  $publication
     * @return \Illuminate\Http\Response
     */
    public function destroy(Publication $publication)
    {
        //
    }
}
