<?php

namespace App\Listeners;

use App\Events\ThreadReplied;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateReplyList
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
     * @param  ThreadReplied  $event
     * @return void
     */
    public function handle(ThreadReplied $event)
    {
        //
    }
}
