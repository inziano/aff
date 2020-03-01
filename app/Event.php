<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Filters\Filterable;


class Event extends Model
{
    use Filterable;
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
