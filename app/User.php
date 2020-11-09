<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Bio;
use App\Education;
use App\Work;
use App\Publication;
use App\Role;
use App\Filters\Filterable;

class User extends Authenticatable
{
    use Notifiable;
    use Filterable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'email',
        'password',
        'approval_date'
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
        return $this->hasMany(Work::class);
    }

    /**
     * education
     *
     * @return void
     */
    public function education()
    {
        return $this->hasMany(Education::class);
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
        return $this->hasMany(Publication::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
