<?php

namespace App\Http\Controllers;

use App\Thread;
use App\User;
use App\Topic;
use Illuminate\Http\Request;
use App\Events\ThreadCreated;
use App\Events\ThreadDeleted;
use App\Http\Resources\Thread as ThreadResource;
use App\Repositories\ThreadRepository;

class ThreadController extends Controller
{
    /**
     * __construct
     *
     * @param ThreadRepository $repo
     * @return void
     */
    public function __construct(ThreadRepository $repo)
    {
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
        return ThreadResource::collection(Thread::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Store
        $this->validate(request(),[
            'subject',
            'body',
            'topic_id',
            'user_id'
        ]);
        // Check user id and topic id.
        if ( User::where('id', $request->input('user_id'))->exists()){
            // Create thread
            $thread = $this->repo->createThread($request);
        } else {
            $thread = abort(404);
        }

        event( new ThreadCreated());
        return $thread;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function show($thread)
    {
        //
        $thread = $this->repo->showThread($thread);

        return $thread;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function edit(Thread $thread)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Thread $thread)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function destroy($thread)
    {
        //
        $thread = $this->repo->deleteThread($thread);

        event(new ThreadDeleted());

        return $thread;
    }
}
