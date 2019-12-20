<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\User;

class Event extends JsonResource
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
            'startdate'=>$this->startdate,
            'enddate'=>$this->enddate,
            'name'=>$this->name,
            'location'=> $this->location,
            'description' => $this->description,
            'user' => User::where('id',$this->user_id)->first(),
            'created_at' => $this->created_at->format('Y-m-d')
        ];
    }
}
