<?php

namespace App\Filters;

use App\Event;
use Illuminate\Http\Request;

class EventFilters extends QueryFilters
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
        return $this->builder->where('events.name', 'LIKE', "%$term%")
            ->orWhere('events.description', 'LIKE', "%$term");
    }

    // Start
    public function startdate($term)
    {
        return $this->builder->where('events.startdate', 'LIKE', "%$term%");
    }

    // End
    public function enddate($term)
    {
        return $this->builder->where('events.enddate', 'LIKE', "%$term%");
    }

    // Location
    public function location($term)
    {
        return $this->builder->where('events.location', 'LIKE', "%$term%");
    }

    // 
    public function year($term)
    {
        return $this->builder->where('events.created_at','LIKE', "%$term%");
    }
}