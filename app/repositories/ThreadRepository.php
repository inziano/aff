<?php

namespace App\Repositories;

use Illuminate\Http\Request;
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
        return Thread::where('id', $id)->first();
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