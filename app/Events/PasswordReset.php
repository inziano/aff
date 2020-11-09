<?php

namespace App\Events;

use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PasswordReset
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;
    public $resetcode;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user, $resetcode)
    {
        //
        $this->user = $user;
        $this->resetcode = $resetcode;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
