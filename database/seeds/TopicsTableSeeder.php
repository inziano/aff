<?php

use Illuminate\Database\Seeder;

class TopicsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(App\Topic::class, 10)->create()->each( function($topic){
            // Create thread
            $topic->threads()->save(factory(App\Thread::class)->make());
        });
    }
}
