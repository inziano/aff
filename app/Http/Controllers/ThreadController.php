<?php

namespace App\Http\Controllers;

use App\Thread;
use App\User;
use App\Topic;
use App\Filters\ThreadFilters;
use Illuminate\Http\Request;
use App\Events\ThreadCreated;
use App\Events\ThreadDeleted;
use App\Events\FilterThreads;
use App\Events\SearchThreads;
use App\Events\UpdateThreadViewCount;
use App\Events\UpdateThreadLikeCount;
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
    public function index(Request $request,ThreadFilters $filters)
    {
        $this->authorize('viewAny', Thread::class);

        $public = Thread::public()->get()->modelKeys();

        $topics = auth()->user()->topics->modelKeys();

        $subscribed = Thread::whereIn('topic_id', $topics)->get()->modelKeys();
        // dd
        $t_id = array_unique( array_merge( $subscribed, $public));
        //
        return ThreadResource::collection(Thread::filter($filters)->whereIn('id',$t_id)->paginate(12));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('create', Thread::class);
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

        event(new ThreadCreated($thread->id));

        return 'ok';
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Thread $thread)
    {
        $this->authorize('update', $thread);

        //check if the request has input or like
        if ( $request->has('likes')) {
            // call like updater
            $likes = $this->repo->likeThread($thread->id);
            // Push event
            event( new UpdateThreadLikeCount($thread->id));
            // Return
            return $likes;

        } elseif ($request->has('views')) {
            // call view updater
            $views = $this->repo->viewThread($thread->id);
            // Push event
            event( new UpdateThreadViewCount($thread->id));
            // Return
            return $views;
        } else {
            // push the update
            return $request;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function destroy(Thread $thread)
    {
        $this->authorize('delete', $thread);
        //
        $thread = $this->repo->deleteThread($thread->id);

        event(new ThreadDeleted());

        return $thread;
    }
}
