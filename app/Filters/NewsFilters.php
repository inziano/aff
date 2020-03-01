<?php

namespace App\Filters;

use App\News;
use Illuminate\Http\Request;

class NewsFilters extends QueryFilters
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
        return $this->builder->where('news.title', 'LIKE', "%$term%")
            ->orWhere('news.body', 'LIKE', "%$term%");
    }

    // Year
    public function year($term)
    {
        return $this->builder->where('news.created_at', 'LIKE', "%$term%");
    }
}