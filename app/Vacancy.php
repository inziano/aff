<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    //
    protected $fillable = [
        'title',
        'description',
        'location',
        'deadline',
        'user_id'
    ];
}
