<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Thread;

class Topic extends Model
{
    // Fillable
    protected $fillable = [
        'title',
        'description',
        'public',
    ];

    // Relationship
    public function threads()
    {
        return $this->hasMany(Thread::class);
    }

    // Users that have a subscription for a particular topic
    public function users()
    {
        return $this->belongsToMany(User::class,'subscriptions');
    }
}
