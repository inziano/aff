<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    //Fillable
    protected $fillable = [
        'email',
        'message',
        'user_id'
    ];
}
