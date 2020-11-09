<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Bio;

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
        $applicant = User::where('status','applicant')->whereHas('bio', function(Builder $query){ 
                        $query->whereNull('firstname')->whereNull('lastname')->whereNull('surname');
                    })->count();
       
        $total = User::count();

        $countries = Bio::select('citizenship', DB::raw('count(*) as total'))->whereNotNull('citizenship')->groupBy('citizenship')->get();

        $this->userstats = [
            'members' => $member,
            'applicants' => $applicant,
            'total' => $total,
            'countries'=> $countries
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
