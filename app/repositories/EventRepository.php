<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Http\Resources\Event as EventResource;
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

    public function searchEvents($term)
    {
        // Search the thread
        $events = EventResource::collection(
            Event::where('name','LIKE', '%'.$term.'%')->orWhere('description', 'LIKE', '%'.$term.'%')->paginate(10)
        );

        return $events;
    }

    
    public function deleteEvent($id)
    {
        if ( Event::where('id',$id)->exists()){

            $event = Event::find($id)->delete();
        }else{
            $event = abort(404);
        }

        return $event;
    }

}