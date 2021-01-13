<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\Bio as BioResource;
use App\Http\Resources\Work as WorkResource;
use App\Http\Resources\Education as EducationResource;
use App\Bio;
use App\Work;
use App\Education;
use App\Role;

class User extends JsonResource
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
            'email'=> $this->email,
            'username' => $this->username,
            'bio' => new BioResource($this->bio),
            'education' => EducationResource::collection(Education::where('user_id',$this->id)->get()),
            'work' => WorkResource::collection( Work::where('user_id',$this->id)->get()),
            'publications'=> $this->publication->count(),
            'rights' => $this->roles,
            'status' => $this->status,
            'image' => is_null($this->image) ? null :  Storage::cloud()->url($this->image),
        ];
    }
}
