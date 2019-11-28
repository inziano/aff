<?php

namespace App\Listeners;

use App\Events\InvitationSent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendInvitationEmail
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
     * @param  InvitationSent  $event
     * @return void
     */
    public function handle(InvitationSent $event)
    {
        //
    }
}
