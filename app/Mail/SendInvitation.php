<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\User;
use App\Invitation;

class SendInvitation extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $invitation;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, Invitation $invitation)
    {
        //
        $this->user = $user;
        $this->invitation = $invitation;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('no-reply@aff.org')
                    ->view('emails.inviteusers');
    }
}
