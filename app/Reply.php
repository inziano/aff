<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    // Fillable
    protected $fillable = [
        'body',
        'thread_id',
        'user_id',
        'reply_id',
        'likes',
    ];
}
