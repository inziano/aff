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
        return $this->builder->where('messages.content', 'LIKE', "%$term%")->orderBy('created_at', 'desc');;
    }

    // Year
    public function year($term)
    {
        return $this->builder->where('messages.created_at', 'LIKE', "%$term%")->orderBy('created_at', 'desc');;
    }

    // All messages
    public function all($term)
    {
        return $this->builder->where('messages.sender', 'LIKE', "%$term%")
                            ->orWhere('messages.recipient','LIKE', "%$term%")
                            ->orderBy('created_at', 'desc');
    }

    // Sender
    public function sender($term)
    {
        return $this->builder->where('messages.sender', 'LIKE', "%$term%");
    }

    // Recipient
    public function recipient($term)
    {
        return $this->builder->where('messages.recipient','LIKE', "%$term%");
    }

    // Conversation
    public function conversation($term)
    {
        // Convert url param string to array and convert array to object
        $term = explode(',', $term);
        $a = $term[0];
        $b = $term[1];

        return $this->builder->where([['messages.recipient','=',"$a"], ['messages.sender','=', "$b"]])
                                ->orWhere([['messages.sender','=', "$a"],['messages.recipient','=',"$b"]])
                                ->orderBy('created_at', 'asc');
    }
}