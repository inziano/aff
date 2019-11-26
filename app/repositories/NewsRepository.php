<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\News;

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
}