<?php

namespace App\Filters;

use App\Publication;
use Illuminate\Http\Request;

class PublicationFilters extends QueryFilters
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;

        parent::__construct($request);
    }

    public function search($term='%')
    {
        return $this->builder->where('publications.title','LIKE', "%$term%")
            ->orWhere('publications.author','LIKE', "%$term%")
            ->orWhere('publications.publisher','LIKE', "%$term%");
    }
    // Title filter
    public function title($term)
    {
        return $this->builder->where('publications.title','LIKE', "%$term%");
    }

    // Author
    public function author($term)
    {
        return $this->builder->where('publications.author','LIKE', "%$term%");
    }

    // tags
    public function tags($term)
    {
        return $this->builder->where('publications.tags','LIKE', "%$term%");
    }

    // year
    public function year($term)
    {
        return $this->builder->where('publications.publication_year', '=', "%$term%");
    }
}

