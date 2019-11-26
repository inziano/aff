<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Education;

class EducationRepository {
    
    /**
     * createEducation
     *
     * @param Request $request
     * @return void
     */
    public function createEducation( Request $request )
    {
        // Create new
        $edu = Education::create($request->all());

        return $edu;
    }

    /**
     * findEducation
     *
     * @param mixed $education
     * @return void
     */
    public function findEducation( $education )
    {
        // Find education
        $education = Education::where('user_id', $education)->first();

        return $education;
    }
}