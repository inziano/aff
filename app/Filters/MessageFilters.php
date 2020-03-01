<?php

namespace App\Filters;

use App\Message;
use Illuminate\Http\Request;

class MessageFilters extends QueryFilters
{
    protected $request;

    public function __construct( Request $request )
    {
        $this->request = $request;

        parent::__construct($request);
    }

    // Search
    public function search($term)
    {
        return $this->builder->where('messages.subject', 'LIKE', "%$term%")
            ->orWhere('messages.body', 'LIKE', "%$term");
    }

    // Year
    public function year($term)
    {
        return $this->builder->where('messages.created_at', 'LIKE', "%$term%");
    }
}