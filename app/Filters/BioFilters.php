<?php

namespace App\Filters;

use App\Bio;
use Illuminate\Http\Request;

class BioFilters extends QueryFilters
{
    protected $request;

    public function __construct( Request $request)
    {
        $this->request = $request;

        parent::__construct($request);
    }

    // Search Bios
    public function search($term)
    {
        return $this->builder->where('bios.firstname', 'LIKE', "%$term")
            ->orWhere('bios.lastname', 'LIKE', "%$term")
            ->orWhere('bios.surname', 'LIKE', "%$term");
    }

    // Filter by qualification
    public function qualification($term)
    {
        return $this->builder->where('bios.qualification', 'LIKE', "%$term");
    }

    // Field of study
    public function field($term)
    {
        return $this->builder->where('bios.field_of_study', 'LIKE', "%$term");

    }

    // Citizenship
    public function citizenship($term)
    {
        return $this->builder->where('bios.citizenship', 'LIKE', "%$term");
    }
}