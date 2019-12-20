<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\User;

class Vacancy extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'location' => $this->location,
            'deadline'=> $this->deadline,
            'created_at' => $this->created_at->format('Y-m-d'),
            'user'=> User::where('id',$this->user_id)->first(),
        ];
    }
}
