<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\News;
use Faker\Generator as Faker;

$factory->define(News::class, function (Faker $faker) {
    return [
        // 
        'title' => $faker->sentence,
        'body' => $faker->text,
        'tags'=> $faker->word,
        'category'=> json_encode($faker->words, true),
        'user_id' => 1
    ];
});
