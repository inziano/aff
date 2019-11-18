<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Gallery;

class GalleryRepository {
    
    /**
     * createGallery
     *
     * @param Request $request
     * @return void
     */
    public function createGallery( Request $request )
    {
        // Create new
        $pub = Gallery::create($request->all());

        return $pub;
    }
}