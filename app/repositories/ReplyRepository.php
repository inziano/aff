<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Http\Resources\Reply as ReplyResource;
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
            $replies = ReplyResource::collection(Reply::where('thread_id', $id)->get());
        }else{
            $replies = abort(404);
        }

        return $replies;
    }

    /**
     * likeReply
     *
     * @param mixed $id
     * @return void
     */
    public function likeReply($id) 
    {
        // increment like count
        if ( Reply::where('id', $id)->exists()) {
            $likes = Reply::find($id)->increment('likes');

            return $likes;
        } else {
            return abort(404);
        }

    }


    public function deleteReply($id)
    {
        if ( Reply::where('id',$id)->exists()){

            $reply = Reply::find($id)->delete();
        }else{
            $reply = abort(404);
        }

        return $reply;
    }
}