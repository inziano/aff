<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\User;
use App\Reply as Replies;
use App\Http\Resources\Reply as ReplyResource;

class Reply extends JsonResource
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
            'body' => $this->body,
            'thread_id' => $this->thread_id,
            'user_id' => $this->user_id,
            'reply_id'=> $this->reply_id,
            'likes' => $this->likes,
            'user'=> User::where('id',$this->user_id)->first(),
            'created_at' => $this->created_at,
            'replies'=> ReplyResource::collection(Replies::where('reply_id', $this->id)->get())
        ];

    }
}
