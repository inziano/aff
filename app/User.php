<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Bio;
use App\Education;
use App\Work;
use App\Publication;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * work
     *
     * @return void
     */
    public function work()
    {
        return $this->hasOne(Work::class);
    }

    /**
     * education
     *
     * @return void
     */
    public function education()
    {
        return $this->hasOne(Education::class);
    }

    /**
     * bio
     *
     * @return void
     */
    public function bio()
    {
        return $this->hasOne(Bio::class);
    }

    public function publication()
    {
        return $this->hasOne(Publication::class);
    }
}
