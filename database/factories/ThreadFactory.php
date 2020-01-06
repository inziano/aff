<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Thread;
use Faker\Generator as Faker;

$factory->define(Thread::class, function (Faker $faker) {
    return [
        //
        'subject' => $faker->sentence,
        'body' => $faker->paragraph,
        'user_id' => $faker->randomDigitNot(0),
    ];
});
