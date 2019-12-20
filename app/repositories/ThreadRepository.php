<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Http\Resources\Thread as ThreadResource;
use App\Thread;

class ThreadRepository {
    
    /**
     * createThread
     *
     * @param Request $request
     * @return void
     */
    public function createThread( Request $request )
    {
        // Create new
        $pub = Thread::create($request->all());

        return $pub;
    }

    /**
     * showThread
     *
     * @param mixed $id
     * @return void
     */
    public function showThread($id)
    {
        return ThreadResource::collection(Thread::where('id', $id)->get());
    }

    /**
     * likeThread
     *
     * @param mixed $id
     * @return void
     */
    public function likeThread($id) 
    {
        // increment like count
        if ( Thread::where('id', $id)->exists()) {
            $likes = Thread::find($id)->increment('likes');

            return $likes;
        } else {
            return abort(404);
        }

    }

    /**
     * filterByTopic
     *
     * @param mixed $id
     * @return void
     */
    public function filterByTopic($id)
    {
        return ThreadResource::collection(Thread::where('topic_id', $id)->get());
    }

    /**
     * filterByUser
     *
     * @param mixed $id
     * @return void
     */
    public function filterByUser($id)
    {
        return ThreadResource::collection(Thread::where('user_id', $id)->get());
    
    }

    /**
     * searchThreads
     *
     * @param mixed $term
     * @return void
     */
    public function searchThreads($term)
    {
        // Search the thread
        $threads = ThreadResource::collection(
            Thread::where('subject','LIKE', '%'.$term.'%')->orWhere('body', 'LIKE', '%'.$term.'%')->get()
        );

        return $threads;
    }

    /**
     * viewThread
     *
     * @param mixed $id
     * @return void
     */
    public function viewThread($id) {
        // increment like count
        if ( Thread::where('id', $id)->exists() ){
            // get likes
            $views = Thread::find($id)->increment('views');

            return $views;
        } else {
            return abort(404);
        }
    }

    /**
     * deleteThread
     *
     * @param mixed $id
     * @return void
     */
    public function deleteThread($id)
    {
        if ( Thread::where('id',$id)->exists()){

            $thread = (string) Thread::find($id)->delete();
        }else{
            $thread = abort(404);
        }

        return $thread;
    }
}