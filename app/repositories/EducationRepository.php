<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Education;
use App\Http\Resources\Education as EducationResource;

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
     * updateEducation
     *
     * @param mixed $Education
     * @return void
     */
    public function updateEducation( Education $education, Request $request)
    {
        return $education->update( $request->all());
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
        $education = EducationResource::collection(Education::where('user_id', $education)->get());

        return $education;
    }
    /**
     * deleteEducation
     *
     * @param mixed $Education
     * @return void
     */
    public function deleteEducation( Education $education )
    {
        return $education->delete();
    }
}