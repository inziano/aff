<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Http\Resources\Thread as ThreadResource;
use App\Http\Resources\Reply as ReplyResource;
use App\Thread;
use App\Reply;

class ThreadReplied implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $reply;
    public $thread;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($reply)
    {
        //
        $this->reply = ReplyResource::collection(Reply::where('id', $reply->id)->get());
        $this->thread = ThreadResource::collection(Thread::where('id', $reply->thread_id)->get());
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('replies');
    }
}
