<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Http\Resources\VacancyApplication as VacancyApplicationResource;
use App\VacancyApplication;

class VacancyApplicationRepository {
    
    /**
     * createVacancy
     *
     * @param Request $request
     * @return void
     */
    public function createVacancyApplication( Request $request )
    {
        // Create new
        $vacancyapplication = VacancyApplication::create($request->all());

        return $vacancyapplication;
    }

    /**
     * showVacancyapplication
     *
     * @param mixed $id
     * @return void
     */
    public function showVacancyapplication($id)
    {
        return VacancyapplicationResource::collection(VacancyApplication::where('vacancy_id', $id)->get());
    }

}