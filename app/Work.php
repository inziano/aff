<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    //Fillable
    protected $fillable = [
        'institution',
        'title',
        'country',
        'startdate',
        'enddate'
    ];
    /**
     * user
     *
     * @return void
     */
    public function user()
    {
        return $this->belongTo(User::class);
    }
}
