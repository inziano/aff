<?php

namespace App\Filters;

use App\Vacancy;
use  Illuminate\Http\Request;

class VacancyFilters extends QueryFilters
{
    protected $request;

    public function __construct( Request $request )
    {
        $this->request = $request;

        parent::__construct($request);
    }

    // Search
    public function search($term='%')
    {
        return $this->builder->where('vacancies.title', 'LIKE', "%$term%")
            ->orWhere('vacancies.description', 'LIKE', "%$term%")
            ->orWhere('vacancies.location', 'LIKE', "%$term%");
    }

    // Location
    public function location($term)
    {
        return $this->builder->where('vacancies.location', 'LIKE', "%$term%");
    }

    // deadline
    public function year($term)
    {
        return $this->builder->where('vacancies.deadline', 'LIKE', "%$term%");
    }

}