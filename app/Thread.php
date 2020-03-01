<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Filters\Filterable;

class Thread extends Model
{
    use Filterable;
    // Fillable
    protected $fillable = [
        'subject',
        'body',
        'topic_id',
        'user_id',
        'likes',
        'views'
    ];

    public function topic()
    {
        return $this->belongsTo(App\Topic::class);
    }
}
