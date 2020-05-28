<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Filters\Filterable;

class News extends Model
{
    use Filterable;
    //Fillable
    protected $fillable = [
        'title',
        'body',
        'tags',
        'category',
        'published',
        'user_id'
    ];
}
