<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

use App\Publication;
use App\User;
use App\Vacancy;
use App\News;
use App\Thread;
use App\Event;
use App\Observers\PublicationObserver;
use App\Observers\UserObserver;
use App\Observers\VacancyObserver;
use App\Observers\NewsObserver;
use App\Observers\ThreadObserver;
use App\Observers\EventObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
        
        // Observe publication
        Publication::observe(PublicationObserver::class);
        // 
        User::observe(UserObserver::class);
        // 
        Thread::observe(ThreadObserver::class);
        // 
        Vacancy::observe(VacancyObserver::class);
        // 
        News::observe(NewsObserver::class);

        Event::observe(EventObserver::class);
    }
}
