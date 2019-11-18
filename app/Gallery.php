<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    //Fillable
    protected $fillable = [
        'title',
        'album',
        'date',
        'tags'
    ];
}
