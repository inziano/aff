<?php

namespace App\Filters;

use App\Thread;
use App\Topics;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ThreadFilters extends QueryFilters
{
    protected $requests;

    public function __construct( Request $request )
    {
        $this->request = $request;

        parent::__construct($request);
    }

    // Search
    public function search($term='%')
    {

        return $this->builder->where('threads.subject', 'LIKE', "%$term%")
            ->orWhere('threads.body', 'LIKE', "%$term%");

    }

    // Subject
    public function subject($term)
    {
        return $this->builder->where('threads.subject', 'LIKE',"%$term%");
    }

    // Content
    public function body($term)
    {
        return $this->builder->where('threads.body', 'LIKE', "%$term%");
    }

    // Topic
    public function topic($term)
    {
        $topics = DB::table('topics')->select('id')->where('title','LIKE', "%$term%")->pluck('id');

        $topics = $topics->toArray();

        return $this->builder->whereIn('threads.topic_id', $topics);
    }

    // Year
    public function year($term)
    {
        return $this->builder->where('threads.created_at','LIKE',"%$term%");
    }
}