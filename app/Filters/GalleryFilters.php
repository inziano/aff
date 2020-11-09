<?php

namespace App\Filters;

use App\Gallery;
use Illuminate\Http\Request;

class GalleryFilters extends QueryFilters
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
        return $this->builder->where('galleries.title', 'LIKE', "%$term%");
    }

    // Year
    public function year($term)
    {
        return $this->builder->where('galleries.created_at', 'LIKE', "%$term%");
    }

    // Owner
    public function owner($term)
    {
        return $this->builder->where('galleries.user_id', '=',"$term");
    }
}