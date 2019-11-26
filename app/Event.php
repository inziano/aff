<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //Fillable
    protected $fillable = [
        'startdate',
        'enddate',
        'name',
        'location',
        'description',
        'user_id'
    ];
}
