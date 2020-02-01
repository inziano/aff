<?php

namespace App\Observers;

use App\Publication;
use App\Events\PublicationStats;

class PublicationObserver
{
    /**
     * Handle the publication "created" event.
     *
     * @param  \App\Publication  $publication
     * @return void
     */
    public function created(Publication $publication)
    {
        //
    }

    /**
     * Handle the publication "updated" event.
     *
     * @param  \App\Publication  $publication
     * @return void
     */
    public function updated(Publication $publication)
    {
        //
    }

    /**
     * Handle the publication "deleted" event.
     *
     * @param  \App\Publication  $publication
     * @return void
     */
    public function deleted(Publication $publication)
    {
        //
    }

    /**
     * Handle the publication "restored" event.
     *
     * @param  \App\Publication  $publication
     * @return void
     */
    public function restored(Publication $publication)
    {
        //
    }

    public function retrieved(Publication $publication)
    {
        // Fire event
        event( new PublicationStats() );
    }

    /**
     * Handle the publication "force deleted" event.
     *
     * @param  \App\Publication  $publication
     * @return void
     */
    public function forceDeleted(Publication $publication)
    {
        //
    }
}
