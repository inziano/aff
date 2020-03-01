<?php

namespace App\Http\Controllers;

use App\News;
use App\Filters\NewsFilters;
use Illuminate\Http\Request;
use App\Events\SearchNews;
use App\Events\NewsCreated;
use App\Events\NewsDeleted;
use App\Http\Resources\News as NewsResource;
use App\Repositories\NewsRepository;

class NewsController extends Controller
{
     /**
     * __construct
     *
     * @param NewsRepo $repo
     * @return void
     */
    public function __construct(NewsRepository $repo)
    {
        // 
        $this->repo = $repo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, NewsFilters $filters)
    {
        //
        return NewsResource::collection(News::filter($filters)->paginate(12));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate
        $this->validate(request(),[
            'title',
            'body',
            'tags',
            'category',
        ]);

        // repo
        $news = $this->repo->createNews($request);

        event( new NewsCreated());

        return $news;
    }

    /**
     * search
     *
     * @param Request $request
     * @return void
     */
    public function search(Request $request)
    {
        $results = $this->repo->searchNews($request->input('search'));

        // TODO: Fail gracefully incase of error
        // Fire event
        event( new SearchNews($results));

        // 
        return $results;
    }

     /**
     * Display the specified resource.
     *
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show($news)
    {
        //
        $news = $this->repo->showNews($news);

        return $news;
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $news = $this->repo->updateNews($request);
        return $news;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy($news)
    {
        //
        $news = $this->repo->deleteNews($news);

        event(new NewsDeleted());

        return (string)$news;
    }
}
