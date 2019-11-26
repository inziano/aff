<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    //Fillable
    protected $fillable = [
        'institution',
        'startdate',
        'enddate',
        'degree',
        'field_of_study',
        'description',
        'user_id'
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
