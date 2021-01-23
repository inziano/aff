<?php

namespace App\Http\Controllers;

use App\Topic;
use Illuminate\Http\Request;
use App\Http\Resources\Topic as TopicResource;
use App\Repositories\TopicRepository;

class TopicController extends Controller
{

    /**
     * __construct
     *
     * @param TopicRepository $repo
     * @return void
     */
    public function __construct(TopicRepository $repo)
    {
        $this->repo = $repo;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Topic::class);
        //
        return TopicResource::collection(Topic::paginate(12));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $this->validate(request(),[
            'title'=> 'required|string',
            'description'=> 'required|string'
        ]);

        $topic = $this->repo->createTopic($request);

        return $topic;

    }

    /**
     * Subscribe to the specified topic
     * 
     * @param \Illuminate\Http\Request $request
     * @param \App\Topic $topic
     * @return \Illuminate\Http\Response
     */
    public function subscribe(Request $request, Topic $topic)
    {
        // Only subscribe to private topics
        if (!$topic->isPublic() ){

            $topic->users()->attach($request->user);
            
            return 'Subscribed';
        }
       
        // Abort
        return abort(403, 'This topic is public');
    }

    /**
     * Unsubscribe to the specified topic
     * 
     * @param \Illuminate\Http\Request $request
     * @param \App\Topic $topic
     * @return \Illuminate\Http\Response
     */
    public function unsubscribe(Request $request, Topic $topic)
    {
        $topic->users()->detach($request->user);

        return 'okay';
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Topic $topic)
    {
        //
        dd($request);
        $topic = $this->repo->updateTopic( $topic, $request);

        return $topic;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Topic $topic)
    {
        // 
        $topic = $this->repo->deleteTopic($topic->id);

        // event(new TopicDeleted());

        return $topic;
    }
}
