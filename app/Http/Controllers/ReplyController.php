<?php

namespace App\Http\Controllers;

use App\Reply;
use Illuminate\Http\Request;
use App\Events\ThreadReplied;
use App\Events\UpdateReplyLikeCount;
use App\Events\UpdateReplyViewCount;
use App\Repositories\ReplyRepository;
use App\Http\Resources\Reply as ReplyResource;

class ReplyController extends Controller
{
    public function __construct(ReplyRepository $repo)
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
        return ReplyResource::collection(Reply::whereNull('reply_id')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $this->validate(request(),[
            'body' => 'required|string',
        ]);

        // push
        $reply = $this->repo->createReply($request);

        // Fire event
        event( new ThreadReplied($reply->thread_id));

        return $reply;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $reply = $this->repo->showReply($id);

        return $reply;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //check if the request has input or like
        if ( $request->has('likes')) {
            // call like updater
            $likes = $this->repo->likeReply($id);
            // Push event
            event( new UpdateReplyLikeCount($id));
            // Return
            return $likes;

        } elseif ($request->has('views')) {
            // call view updater
            $views = $this->repo->viewReply($id);
            // Push event
            event( new UpdateReplyViewCount($id));
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
     * @param  \App\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function destroy($reply)
    {
        // Thread
        $thread = Reply::where('id',$reply)->first()->thread_id;
        //
        $reply = $this->repo->deleteReply($reply);

        event(new ThreadReplied($thread));

        return (string)$reply;
    }
}
