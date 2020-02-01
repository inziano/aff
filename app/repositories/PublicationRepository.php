<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Http\Resources\Publication as PublicationResource;
use App\Publication;

class PublicationRepository {
    
    /**
     * createPublication
     *
     * @param Request $request
     * @return void
     */
    public function createPublication( Request $request )
    {
        // Create new
        $pub = Publication::create($request->all());

        return $pub;
    }

    /**
     * searchPublications
     *
     * @param mixed $term
     * @return void
     */
    public function searchPublications($term)
    {
        // Search the publication
        $publications = PublicationResource::collection(
            Publication::where('author','LIKE', '%'.$term.'%')
                ->orWhere('title', 'LIKE', '%'.$term.'%')
                ->orWhere('publisher', 'LIKE', '%'.$term.'%')
                ->orWhere('abstract', 'LIKE', '%'.$term.'%')->get()
        );

        return $publications;
    }

     /**
     * showPublicationapplication
     *
     * @param mixed $id
     * @return void
     */
    public function showPublication($id)
    {
        return PublicationResource::collection(Publication::where('id', $id)->get());
    }

}