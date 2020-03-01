<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Filters\Filterable;

class Bio extends Model
{
    use Filterable;
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
        'field_of_study',
        'user_id'
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
