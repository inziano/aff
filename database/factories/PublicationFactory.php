<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Publication;
use Faker\Generator as Faker;

$factory->define(Publication::class, function (Faker $faker) {
    return [
        //
        'author'=> $faker->name,
        'title'=> $faker->text,
        'publisher'=> $faker->company,
        'abstract'=> $faker->text,
        'pubpath'=> $faker->word,
        'downloads'=> $faker->randomdigit,
        'views'=> $faker->randomdigit,
        'publication_year'=> $faker->date($max = 'now', $timezone = null),

    ];
});
