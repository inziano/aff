<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\User;

class News extends JsonResource
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
            'id'=> $this->id,
            'title' =>$this->title,
            'body'=>$this->body,
            'tags'=>$this->tags,
            'category'=>$this->category,
            'published'=> (bool)$this->published,
            'user' => User::where('id',$this->user_id)->first(),
            'created_at' => $this->created_at->format('Y-m-d')
        ];
    }
}
