<?php

namespace App\Http\Controllers;

use App\Gallery;
use App\Filters\GalleryFilters;
use Illuminate\Http\Request;
use App\Http\Resources\Gallery as GalleryResource;
use App\Repositories\GalleryRepository;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon; 


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
    public function index(Request $request, GalleryFilters $filters)
    {
        //
        return GalleryResource::collection(Gallery::filter($filters)->paginate(12));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Check request
        $this->validate(request(),[
            'title'=>'required',
            'date'=>'required',
        ]);

        // Push to storage
        $title = $request->input('title');
        $album = $request->input('album');

        // Publication year
        $newdate = Carbon::parse(strtotime($request->input('date')))->toDate();
        
        // Store file
        $imgpath = Storage::cloud()->putFileAs('gallery',$request->file('image'), $title);

        $request->request->add(['imgpath'=> $imgpath]);

        $request->merge(['date'=>$newdate]);

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
