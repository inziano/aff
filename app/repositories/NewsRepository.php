<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\News;
use App\Http\Resources\News as NewsResource;

class NewsRepository {
    
    /**
     * createNews
     *
     * @param Request $request
     * @return void
     */
    public function createNews( Request $request )
    {
        // Create new
        $news = News::create($request->all());

        return $news;
    }

    public function updateNews( Request $request )
    {
        // Update
        $ids = $request->input('id');
        // Check if all users exist
        return News::whereIn('id', $ids)->update($request->only('published'));
    }
    /**
     * showNews
     *
     * @param mixed $id
     * @return void
     */
    public function showNews($id)
    {
        return NewsResource::collection(News::where('id', $id)->get());
    }
    /**
     * searchNews
     *
     * @param mixed $term
     * @return void
     */
    public function searchNews($term)
    {
        // Search the news
        $news = NewsResource::collection(
            News::where('title','LIKE', '%'.$term.'%')->orWhere('body', 'LIKE', '%'.$term.'%')->paginate(10)
        );

        return $news;
    }
}