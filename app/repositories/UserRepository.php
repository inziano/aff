<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\User;

class UserRepository {

    /**
     * createRequest
     *
     * @param Request $request
     * @return void
     */
    public function createUser( Request $request )
    {
        // Create new 
        $user = User::create($request->all());

        return $user;
    }

}