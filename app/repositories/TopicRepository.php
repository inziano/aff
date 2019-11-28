<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Topic;

class TopicRepository {
    
    /**
     * createTopic
     *
     * @param Request $request
     * @return void
     */
    public function createTopic( Request $request )
    {
        // Create new
        $topic = Topic::create($request->all());

        return $topic;
    }

    /**
     * showTopic
     *
     * @param mixed $id
     * @return void
     */
    public function showTopic($id)
    {
        return Topic::where('id', $id)->first();
    }

    /**
     * deleteTopic
     *
     * @param mixed $id
     * @return void
     */
    public function deleteTopic($id)
    {
        if ( Topic::where('id',$id)->exists()){

            $topic = (string) Topic::find($id)->delete();
        }else{
            $topic = abort(404);
        }

        return $topic;
    }
}