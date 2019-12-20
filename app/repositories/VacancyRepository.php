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

    public function searchVacancies($term)
    {
        // Search the thread
        $vacancys = VacancyResource::collection(
            Vacancy::where('title','LIKE', '%'.$term.'%')->orWhere('description', 'LIKE', '%'.$term.'%')->paginate(10)
        );

        return $vacancies;
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

    
    public function deleteVacancy($id)
    {
        if ( Vacancy::where('id',$id)->exists()){

            $vacancy = Vacancy::find($id)->delete();
        }else{
            $vacancy = abort(404);
        }

        return $vacancy;
    }

}