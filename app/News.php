<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    //Fillable
    protected $fillable = [
        'title',
        'body',
        'tags',
        'category',
        // 'published'
    ];
}
