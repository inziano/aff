<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bio;
use Faker\Generator as Faker;

$factory->define(Bio::class, function (Faker $faker) {
    return [
        //
        'firstname' => $faker->firstName,
        'lastname' => $faker->lastName,
        'surname' => $faker->lastName,
        'title' => $faker->title,
        'gender' => 'male',
        'dob' => $faker->date,
        'phone' => $faker->phoneNumber,
        'altphone' => $faker->phoneNumber,
        'altemail' => $faker->unique()->safeEmail,
        'address' => $faker->address,
        'citizenship' => $faker->countryCode,
        'residency' => $faker->countryCode,
        'qualification' => $faker->word,
        'field_of_study' => $faker->word,
    ];
});
