<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\Vacancy as VacancyResource;
use App\User;
use App\Vacancy;

class VacancyApplication extends JsonResource
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
            'user' => User::where('id',$this->user_id)->first(),
            'vacancy'=> Vacancy::where('id',$this->vacancy_id)->first(),
            'created_at' => $this->created_at
        ];
    }
}
