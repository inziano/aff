<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Filters\Filterable;
use App\Topic;

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
        return $this->belongsTo(Topic::class);
    }

    // To do - query only threads where the topic is public
    public function scopePublic($query)
    {
        return $query->whereHas('topic', function($q)
        {
            $q->where('public', true);
        });

    }
}
