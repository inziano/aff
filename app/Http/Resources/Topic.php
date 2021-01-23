<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Topic extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'discussions' => $this->threads->count(),
            'subscribers'=> $this->users->count(),
            'activity'=> $this->threads->first()->created_at ?? $this->created_at,
            'public' => $this->public,
        ];
    }
}
