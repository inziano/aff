<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Seed users
        $this->call(UsersTableSeeder::class);

        $this->call(TopicsTableSeeder::class);

        $this->call(NewsTableSeeder::class);
    }
}
