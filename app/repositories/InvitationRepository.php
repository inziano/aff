<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Invitation;

class InvitationRepository {
    
    /**
     * createInvitation
     *
     * @param Request $request
     * @return void
     */
    public function createInvitation( Request $request )
    {
        // Create new
        $msg = Invitation::create($request->all());

        return $msg;
    }
}