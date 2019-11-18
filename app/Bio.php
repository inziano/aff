<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Bio extends Model
{
    //Fillable
    protected $fillable = [
        'firstname',
        'lastname',
        'surname',
        'title',
        'gender',
        'dob',
        'phone',
        'altphone',
        'altemail',
        'address',
        'citizenship',
        'residency',
        'qualification',
        'field_of_study'
    ];

    // Relationship
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
