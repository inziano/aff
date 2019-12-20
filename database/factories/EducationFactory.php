<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Education;
use Faker\Generator as Faker;

$factory->define(Education::class, function (Faker $faker) {
    return [
        //
        'institution' => $faker->company,
        'startdate' => $faker->dateTime,
        'enddate' => $faker->dateTime,
        'degree' => $faker->word,
        'field_of_study' => $faker->word,
        'description' => $faker->sentence,
    ];
});
