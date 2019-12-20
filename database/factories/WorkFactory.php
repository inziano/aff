<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Work;
use Faker\Generator as Faker;

$factory->define(Work::class, function (Faker $faker) {
    return [
        //
        'institution' => $faker->company,
        'title' => $faker->jobTitle,
        'country' => $faker->countryCode,
        'startdate' => $faker->date,
        'enddate' => $faker->date,
        'description' => $faker->sentence,
    ];
});
