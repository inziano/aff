<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'startdate'=>$this->startdate,
            'enddate'=>$this->enddate,
            'name'=>$this->name,
            'location'=> $this->location,
            'description' => $this->description,
            'created_at' => $this->created_at->format('Y-m-d')
        ];
    }
}
