<?php

namespace App\Http\Resources;

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
            'title'=> $this->title,
            'abstract'=> $this->abstract,
            'pubpath'=> $this->pubpath,
        ];
    }
}
