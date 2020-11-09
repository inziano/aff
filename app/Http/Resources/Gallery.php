<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;


class Gallery extends JsonResource
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
            'title' => $this->title,
            'album' => $this->album,
            'date' => $this->date,
            'tags' => $this->tags,
            'imgpath' => $this->imgpath,
            'img' => Storage::cloud()->url($this->imgpath)
        ];
    }
}
