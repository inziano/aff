<?php

namespace App\Filters;

use App\User;
use App\Bio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserFilters extends QueryFilters
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;

        parent::__construct($request);
    }

    public function search($term='%')
    {
        $users = DB::table('bios')->select('user_id')->where('firstname','LIKE',"%$term%")
            ->orWhere('lastname','LIKE',"%$term%")
            ->orWhere('surname','LIKE',"%$term%")->pluck('user_id');

        $users = $users->toArray();
        
        return $this->builder->where('users.email','LIKE', "%$term%")
            ->orWhere('users.email','LIKE', "%$term%")
            ->orWhereIn('users.id', $users);
    }

    public function username($term)
    {
        return $this->builder->where('users.username','LIKE', "%.$term.%");
    }

    public function user($term)
    {
        return $this->builder->where('users.id', '=', $term);
    }

    public function email($term)
    {
        return $this->builder->where('users.email', 'LIKE', "%$term%");
    }

    public function expertise($term)
    {
        $users = DB::table('bios')->select('user_id')->where('qualification','LIKE',"%$term%")->pluck('user_id');

        $users = $users->toArray();

        return $this->builder->whereIn('users.id', $users);
    }

    public function country($term)
    {
        $users = DB::table('bios')->select('user_id')->where('residency','LIKE',"%$term%")->pluck('user_id');

        $users = $users->toArray();

        return $this->builder->whereIn('users.id', $users);
    }

    public function gender($term)
    {
        $users = DB::table('bios')->select('user_id')->where('gender','=',"$term")->pluck('user_id');

        $users = $users->toArray();

        return $this->builder->whereIn('users.id', $users);
    }

    public function status($term)
    {
        return $this->builder->where('users.status', '=', $term)->latest();
    }

}