<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Http\Resources\Vacancy as VacancyResource;
use App\Vacancy;

class VacancyRepository {
    
    /**
     * createVacancy
     *
     * @param Request $request
     * @return void
     */
    public function createVacancy( Request $request )
    {
        // Create new
        $vacancy = Vacancy::create($request->all());

        return $vacancy;
    }

    /**
     * showVacancyapplication
     *
     * @param mixed $id
     * @return void
     */
    public function showVacancy($id)
    {
        return VacancyResource::collection(Vacancy::where('id', $id)->get());
    }

    public function updateVacancy( Request $request, $vacancy)
    {
        // Update vacancy
        return $vacancy->update($request->all());
    }
    
    public function deleteVacancy($vacancy)
    {
        // Delete vacancy
        return $vacancy->delete();
    }

}