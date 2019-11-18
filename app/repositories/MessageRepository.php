<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Message;

class MessageRepository {
    
    /**
     * createMessage
     *
     * @param Request $request
     * @return void
     */
    public function createMessage( Request $request )
    {
        // Create new
        $msg = Message::create($request->all());

        return $msg;
    }
}