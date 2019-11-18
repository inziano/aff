<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Publication;

class PublicationRepository {
    
    /**
     * createPublication
     *
     * @param Request $request
     * @return void
     */
    public function createPublication( Request $request )
    {
        // Create new
        $pub = Publication::create($request->all());

        return $pub;
    }
}