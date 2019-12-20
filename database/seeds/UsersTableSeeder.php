<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create multiple users
        factory(App\User::class, 100)->create()->each( function($user){
            // Create bio
            $user->bio()->save(factory(App\Bio::class)->make());
            // Create works
            $user->work()->save(factory(App\Work::class)->make());
            // Create education
            $user->education()->save(factory(App\Education::class)->make());
            // Create publication
            $user->publication()->save( factory(App\Publication::class)->make());

        });
    }
}
