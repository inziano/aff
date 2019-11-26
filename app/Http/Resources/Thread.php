<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Thread extends JsonResource
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
            'subject' =>$this->subject,
            'body' => $this->body,
            'topic_id' => $this->topic_id,
            'user_id'=> $this->user_id,
            'likes'=> $this->likes,
            'views'=> $this->views
        ];
    }
}
