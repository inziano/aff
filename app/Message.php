<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    //Fillable
    protected $fillable = [
        'subject',
        'body',
        'recepient',
        'user_id'
    ];
}
