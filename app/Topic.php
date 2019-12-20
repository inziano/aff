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
    ];

    // Relationship
    public function threads()
    {
        return $this->hasMany(Thread::class);
    }
}
