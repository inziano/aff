<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Event;

class EventRepository {
    
    /**
     * createEvent
     *
     * @param Request $request
     * @return void
     */
    public function createEvent( Request $request )
    {
        // Create new
        $evnt = Event::create($request->all());

        return $evnt;
    }
}