<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\User;

class UserStats implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $userstats;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
        $member = User::where('status','member')->count();
        $applicant = User::where('status','applicant')->count();
        $total = User::count();

        $this->userstats = [
            'members' => $member,
            'applicants' => $applicant,
            'total' => $total
        ];
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('stats');
    }
}
