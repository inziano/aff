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

    public function updateStatus(Request $request)
    {
        $ids = $request->input('id');
        // Check if all users exist
        return User::whereIn('id', $ids)->update($request->only('status'));
    }

}