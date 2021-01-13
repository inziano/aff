<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserNotificationController extends Controller
{
    public function __construct(){}

    //
    public function index( Request $request)
    {
        // Find the user
        $user = User::find( $request->user );

        // Return the unread notifications
       return tap($user->unreadNotifications)->markAsRead();

    }

    // public function markRead( Request $request )
    // {
    //     // Mark all as read
    //    return $user->unreadNotifications->markAsRead();
    // }
}
