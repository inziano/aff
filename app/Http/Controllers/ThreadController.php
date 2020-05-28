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
        //
        return ThreadResource::collection(Thread::filter($filters)->whereNotNull('user_id')->paginate(12));
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
    public function update(Request $request, $id)
    {
        //check if the request has input or like
        if ( $request->has('likes')) {
            // call like updater
            $likes = $this->repo->likeThread($id);
            // Push event
            event( new UpdateThreadLikeCount($id));
            // Return
            return $likes;

        } elseif ($request->has('views')) {
            // call view updater
            $views = $this->repo->viewThread($id);
            // Push event
            event( new UpdateThreadViewCount($id));
            // Return
            return $views;
        } else {
            // push the update
            return $request;
        }
    }

    /**
     * filter
     *
     * @param Request $request
     * @return void
     */
    public function filter(Request $request)
    {
        if ($request->has('topic')){
            // filter thread by topic
            $threads = $this->repo->filterByTopic($request->input('topic'));

        } elseif ($request->has('user')) {
            // Filter thread by user
            $threads = $this->repo->filterByUser($request->input('user'));
        }

        // Fire event
        event( new FilterThreads($threads));

        return $threads;

    }

    /**
     * search
     *
     * @param Request $request
     * @return void
     */
    public function search(Request $request)
    {
        $results = $this->repo->searchThreads($request->input('search'));

        // TODO: Fail gracefully incase of error
        // Fire event
        event( new SearchThreads($results));

        // 
        return $results;
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
