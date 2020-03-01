<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Filters\Filterable;

class Publication extends Model
{
    use Filterable;
    //Fillable
    protected $fillable = [
        'author',
        'title',
        'publisher',
        'abstract',
        'tags',
        'publication_year',
        'pubpath',
        'user_id',
        'downloads',
        'views'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
