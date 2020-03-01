<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
            
       'App\Events\UserRegistered'=> [
            'App\Listeners\SendWelcomeEmailNotification',
       ],
       'App\Events\InvitationSent'=> [
           'App\Listeners\SendInvitationEmail',
       ],
       'App\Events\MemberApproved'=> [
           'App\Listeners\SendMemberNotification',
       ],
       'App\Events\ThreadCreated'=>[
           'App\Listeners\UpdateThreadList'
       ],
       'App\Events\ThreadDeleted'=>[
        'App\Listeners\ThreadDeleteNotification'
        ],
       'App\Events\ThreadReplied'=>[
           'App\Listeners\UpdateReplyList'
       ],
       'App\Events\UpdateThreadLikeCount'=>[

       ],
       'App\Events\UpdateThreadViewCount'=>[

       ],
       'App\Events\UpdateReplyLikeCount'=>[

       ],
       'App\Events\UpdateReplyViewCount'=>[
           
       ],
       'App\Events\FilterThreads'=>[

       ],
       'App\Events\SearchThreads'=>[

       ],
       'App\Events\SearchUsers'=>[

        ],
        'App\Events\SearchEvents'=>[

        ],
        'App\Events\SearchPublications'=>[

        ],
        'App\Events\UserModified'=>[

        ],
        'App\Events\EventCreated'=>[

        ],
        'App\Events\PublicationCreated'=>[
            
        ],
        'App\Events\VacancyApplicationSubmitted'=>[
            
        ],
        'App\Events\VacancyCreated'=>[
            
        ],
        'App\Events\VacancyDeleted'=>[
            
        ],
        'App\Events\EventDeleted'=>[

        ],
        'App\Events\SearchNews'=>[

        ],
        'App\Events\NewsCreated'=>[

        ],
        'App\Events\NewsDeleted'=>[

        ],
        'App\Events\PublicationStats'=>[

        ],
        'App\Events\UserStats'=>[

        ],
        'App\Events\ThreadStats'=>[

        ],
        'App\Events\VacancyStats'=>[

        ],
        'App\Events\MessageStats'=>[

        ],
        'App\Events\NewsStats'=>[
            
        ],
        'App\Events\EventStats'=>[
            
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
