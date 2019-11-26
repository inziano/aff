<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Reply;
use App\Thread;

class ReplyRepository {
    
    /**
     * createReply
     *
     * @param Request $request
     * @return void
     */
    public function createReply( Request $request )
    {
        // Create new
        $reply = Reply::create($request->all());

        return $reply;
    }

    public function showReply($id)
    {
        // 
        if ( Thread::where('id',$id)->exists() ){
            $replies = Reply::where('thread_id', $id)->get();
        }else{
            $replies = abort(404);
        }

        return $replies;
    }
}