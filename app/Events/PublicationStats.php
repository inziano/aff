<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Publication;

class PublicationStats implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $pubstats;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct()
    {
        //// Return array of stats
        $total = Publication::count();
        $downloads = Publication::sum('downloads');
        $views = Publication::sum('views');

        $this->pubstats = [
            'total' => $total,
            'downloads' => $downloads,
            'views' => $views
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
