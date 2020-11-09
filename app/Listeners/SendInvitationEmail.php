<?php

namespace App\Listeners;

use App\Events\InvitationSent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendInvitation;

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
        $email = json_decode($event->invitation->email);
        //
        Mail::to($email)->send(new SendInvitation($event->user, $event->invitation));
    }
}
