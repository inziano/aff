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

    public function showThread($id)
    {
        return Thread::where('id', $id)->first();
    }
}