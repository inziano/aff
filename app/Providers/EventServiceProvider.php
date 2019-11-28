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