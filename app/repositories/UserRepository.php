<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Http\Resources\User as UserResource;
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

    /**
     * updateStatus
     *
     * @param Request $request
     * @return void
     */
    public function updateStatus(Request $request)
    {
        $ids = $request->input('id');
        // Check if all users exist
        return User::whereIn('id', $ids)->update($request->only('status'));
    }

    /**
     * searchUsers
     *
     * @param mixed $term
     * @return void
     */
    public function searchUsers($term)
    {
        // Search the thread
        $users = UserResource::collection(
            User::where('username','LIKE', '%'.$term.'%')->orWhere('email', 'LIKE', '%'.$term.'%')->paginate(12)
        );

        return $users;
    }


}