<?php

namespace App\Listeners;

use App\Events\ThreadDeleted;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ThreadDeleteNotification
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
     * @param  ThreadDeleted  $event
     * @return void
     */
    public function handle(ThreadDeleted $event)
    {
        //
    }
}
