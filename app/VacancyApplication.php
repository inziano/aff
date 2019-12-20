<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VacancyApplication extends Model
{
    //
    protected $fillable = [
        'user_id',
        'vacancy_id',
        'resume',
        'cover_letter',
    ];
}
