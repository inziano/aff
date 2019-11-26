<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    // Fillable
    protected $fillable = [
        'subject',
        'body',
        'topic_id',
        'user_id',
        'likes',
        'views'
    ];
}
