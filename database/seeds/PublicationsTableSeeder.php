<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Publication;
use Carbon\Carbon;

class PublicationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Populate from json file
        DB::table('publications')->delete();
        $json = File::get("database/files/affpubs.json");
        $data = json_decode($json);

        foreach ($data as $d) {
            $userID = User::where('email', $d->email)->first()->id;
            try {
                Publication::create([
                    'author' => $d->author,
                    'title' => $d->title,
                    'publisher' => $d->publisher,
                    'abstract' => $d->description,
                    'tags' => $d->tags,
                    'publication_year' => Carbon::create($d->publication_date),
                    'pubpath' => $d->publication_file,
                    'user_id' => $userID,
                    'downloads' => $d->downloads,
                    'views' => $d->views
                ]);
            } catch (\Throwable $th) {
                //throw $th;
                dd($th);
            }
        }
       
    }
}
