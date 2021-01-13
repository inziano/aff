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

    /**
     * updateEducation
     *
     * @param mixed $Education
     * @return void
     */
    public function updateBio( Bio $bio, Request $request)
    {
        return $bio->update( $request->all());
    }

    public function findBio( $bio )
    {
        // Find bio
        $bio = Bio::where('user_id', $bio)->first();

        return $bio;
    }
}