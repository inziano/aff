<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Filters\Filterable;

class Vacancy extends Model
{
    use Filterable;
    //
    protected $fillable = [
        'title',
        'description',
        'location',
        'deadline',
        'user_id'
    ];
}
