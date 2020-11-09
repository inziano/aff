<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Filters\Filterable;

class Gallery extends Model
{
    use Filterable;
    //Fillable
    protected $fillable = [
        'title',
        'album',
        'date',
        'tags',
        'imgpath',
    ];
}
