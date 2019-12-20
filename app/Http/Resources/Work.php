<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Work extends JsonResource
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
            'institution'=> $this->institution,
            'title'=> $this->title,
            'country'=> $this->country,
            'startdate'=> $this->startdate,
            'enddate'=> $this->enddate,
            'description'=> $this->description,
        ];
    }
}
