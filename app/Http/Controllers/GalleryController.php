<?php

namespace App\Http\Controllers;

use App\Gallery;
use Illuminate\Http\Request;
use App\Http\Resources\Gallery as GalleryResource;
use App\Repositories\GalleryRepository;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    public function __construct(GalleryRepository $repo)
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
        return GalleryResource::collection(Gallery::all()->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //check request
        $this->validate(request(),[
            'title'=>'required',
            'date'=>'required',
        ]);

        // Push to storage
        $title = $request->input('title');
        $album = $request->input('album');
        // Store file
        $imgpath = Storage::cloud()->putFileAs('gallery/'.$album,$request->file('image'), $title.'.'.$request->file('image')->extension());

        $request->request->add(['imgpath'=> $imgpath]);

        // Store
        $gallery = $this->repo->createGallery($request);

        return $gallery;

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        //
    }
}
