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
     * updateWork
     *
     * @param mixed $work
     * @return void
     */
    public function updateWork( Work $work, Request $request)
    {
        return $work->update( $request->all());
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
        $work = Work::where('user_id', $work)->get();

        return $work;
    }

    /**
     * deleteWork
     *
     * @param mixed $work
     * @return void
     */
    public function deleteWork( Work $work )
    {
        return $work->delete();
    }
}