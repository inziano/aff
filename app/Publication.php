<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Publication extends Model
{
    //Fillable
    protected $fillable = [
        'author',
        'title',
        'publisher',
        'abstract',
        'tags',
        'pubpath',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
