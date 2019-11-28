<?php

namespace App\Listeners;

use App\Events\MemberApproved;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendMemberNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  MemberApproved  $event
     * @return void
     */
    public function handle(MemberApproved $event)
    {
        //
    }
}
