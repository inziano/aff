<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    // Fillable
    protected $fillable = [
        'title',
        'description',
    ];
}
