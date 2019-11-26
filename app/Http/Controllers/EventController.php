<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;
use App\Http\Resources\Event as EventResource;
use App\Repositories\EventRepository;
use Carbon\Carbon;

class EventController extends Controller
{

    /**
     * __construct
     *
     * @param EventRepo $repo
     * @return void
     */
    public function __construct(EventRepository $repo)
    {
        // 
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return EventResource::collection(Event::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Store
        $this->validate(request(),[
            'startdate'=> 'required',
            'enddate'=> 'required',
            'name'=> 'required',
            'location'=> 'required',
            'description'=> 'required'
        ]);

        $newstartdate = Carbon::parse($request->input('startdate'))->toDateTimeString();
        $newenddate = Carbon::parse($request->input('enddate'))->toDateTimeString();

        $request->merge(['startdate'=>$newstartdate, 'enddate'=>$newenddate]);
        // Push
        $event = $this->repo->createEvent($request);

        // Fire eventcreated
        // new event(EventCreated($event));

        return $event;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        //
    }
}
