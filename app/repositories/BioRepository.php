<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Bio;

class BioRepository {
    
    /**
     * createBio
     *
     * @param Request $request
     * @return void
     */
    public function createBio( Request $request )
    {
        // Create new
        $bio = Bio::create($request->all());

        return $bio;
    }

    public function findBio( $bio )
    {
        // Find bio
        $bio = Bio::where('user_id', $bio)->first();

        return $bio;
    }
}