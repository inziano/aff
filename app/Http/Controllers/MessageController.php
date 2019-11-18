<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;
use App\Http\Resources\Message as MessageResource;
use App\Repositories\MessageRepository;

class MessageController extends Controller
{
    public function __construct(MessageRepository $repo)
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
        return MessageResource::collection(Message::all()->paginate());
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
            'subject' => 'required',
            'body' => 'required',
            'recepient' => 'required'
        ]);

        // Json encode array
        $recepient = json_encode($request->input('recepient'));

        $request->merge(['recepient'=> $recepient]);

        // Push to repo
        $msg = $this->repo->createMessage($request);

        // Event here
        
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
