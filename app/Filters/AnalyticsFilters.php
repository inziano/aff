<?php

namespace App\Filters;

use App\User;
use App\Publication;
use Illuminate\Http\Request;

class AnalyticsFilters extends QueryFilters
{
    protected $request;

    public function __construct( Request $request)
    {
        $this->request = $request;

        parent::__construct($request);
    }

    // User statistics
    public function members($term)
    {
        // Show statistics for the listed term
        return $this->builder->where('users.status', 'LIKE', "%$term")->count();
    }
    // Publications
    public function publications($term)
    {
        // Show statistics
        return $this->builder->where('publications.', 'LIKE', "%$term")->count();
    }
}