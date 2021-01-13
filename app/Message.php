<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Filters\Filterable;

class Message extends Model
{
    use Filterable;
    //Fillable
    protected $fillable = [
        'content',
        'recipient',
        'sender'
    ];
}
