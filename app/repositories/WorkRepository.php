<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Work;

class WorkRepository {
    
    /**
     * createWork
     *
     * @param Request $request
     * @return void
     */
    public function createWork( Request $request )
    {
        // Create new
        $work = Work::create($request->all());

        return $work;
    }

    /**
     * findWork
     *
     * @param mixed $work
     * @return void
     */
    public function findWork( $work )
    {
        // Find work
        $work = Work::where('user_id', $work)->first();

        return $work;
    }
}