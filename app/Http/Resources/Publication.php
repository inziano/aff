<?php

namespace App\Http\Resources;
use Carbon\Carbon;

use Illuminate\Http\Resources\Json\JsonResource;

class Publication extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'author'=> $this->author,
            'publisher'=> $this->publisher,
            'title'=> $this->title,
            'abstract'=> $this->abstract,
            'pubpath'=> $this->pubpath,
            'downloads'=> $this->downloads,
            'views'=> $this->views,
            'created_at'=> $this->created_at->format('Y-m-d')
        ];
    }
}
