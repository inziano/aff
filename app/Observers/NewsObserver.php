<?php

namespace App\Observers;

use App\News;
use App\Events\NewsStats;

class NewsObserver
{
    /**
     * Handle the news "created" event.
     *
     * @param  \App\News  $news
     * @return void
     */
    public function created(News $news)
    {
        //
    }

    /**
     * Handle the news "updated" event.
     *
     * @param  \App\News  $news
     * @return void
     */
    public function updated(News $news)
    {
        //
    }

    public function retrieved(News $news)
    {
        event(new NewsStats());
    }
    /**
     * Handle the news "deleted" event.
     *
     * @param  \App\News  $news
     * @return void
     */
    public function deleted(News $news)
    {
        //
    }

    /**
     * Handle the news "restored" event.
     *
     * @param  \App\News  $news
     * @return void
     */
    public function restored(News $news)
    {
        //
    }

    /**
     * Handle the news "force deleted" event.
     *
     * @param  \App\News  $news
     * @return void
     */
    public function forceDeleted(News $news)
    {
        //
    }
}
