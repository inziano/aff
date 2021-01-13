<?php

namespace App\Http\Controllers;

use App\Message;
use App\Filters\MessageFilters;
use Illuminate\Http\Request;
use App\Events\MessageReplied;
use App\Notifications\NewMessageNotification;
use App\Http\Resources\Message as MessageResource;
use App\Repositories\MessageRepository;
use App\User; 

class MessageController extends Controller
{
    public function __construct(MessageRepository $repo, MessageFilters $filters)
    {
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, MessageFilters $filters)
    {
        //
        return MessageResource::collection(Message::filter($filters)->paginate(25));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Validate request
        $this->validate(request(),[
            'content' => 'required',
            'recipient' => 'required'
        ]);

        // Push to repo
        $msg = $this->repo->createMessage($request);

        // Get recipient
        $rec = User::find($request->recipient);

        $sen = User::find($request->sender);

        // Send notification
        $rec->notify( new NewMessageNotification( $sen));

        // Event here
        event( new MessageReplied($msg) );

        return $msg;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
