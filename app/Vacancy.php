<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Filters\Filterable;
use Carbon\Carbon;

class Vacancy extends Model
{
    use Filterable;
    //
    protected $fillable = [
        'title',
        'description',
        'location',
        'deadline',
        'user_id'
    ];

    // Expired vacancies
    public function scopeValid($query)
    {
        $today = today();
        // Show only that deadline is in the future
        return $query->whereDate('deadline','>=', $today);

    }
}
