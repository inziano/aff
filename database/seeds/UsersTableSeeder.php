<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Bio;
use App\Work;
use App\Education;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Populate from json file
        DB::table('users')->delete();
        $json = File::get("database/files/aff.json");
        $data = json_decode($json);

        // Loop through data and add them to db
        foreach( $data as $d){
            // try catch block
            try {
                //code...
                $user = User::create([
                    'username' => $d->username,
                    'email' => $d->email,
                    'password' => Hash::make('affMember2020'),
                    'status' => $d->status,
                    'approval_date' => Carbon::parse($d->date_approved) 
                ]);
                
                $user->bio()->create([
                    'firstname' => $d->firstname,
                    'lastname' => $d->middlename,
                    'surname' => $d->surname,
                    'summary' => $d->summary,
                    'title' => $d->headline,
                    'gender' =>$d->gender,
                    'dob' => $d->dob,
                    'phone' => $d->mobile_phone,
                    'altphone' => $d->home_phone,
                    'altemail' => $d->other_email,
                    'address' => $d->street . "," . $d->city . ",". $d->state . ",". $d->zip,
                    'citizenship' => property_exists($d, 'nationality') ? $d->nationality : null,
                    'residency' => property_exists($d, 'country') ? $d->country : null,
                    'qualification' => $d->department,
                    'field_of_study' => $d->field_study,
                ]);
    
                foreach( $d->education as $e){
                    $user->education()->create([
                        'institution' => $e->institution,
                        'startdate' => Carbon::create($e->yearstart),
                        'enddate' =>  Carbon::create($e->yearend),
                        'degree' => $e->coursename,
                        'field_of_study' => $e->degree,
                        'description' => $e->description,
                    ]);
                }
    
                foreach( $d->work as $w){
                    $sdate = $w->year_start. " " . $w->month_start;
                    // dd(Carbon::parse($sdate)->startOfMonth());
                    $edate = $w->year_end. " " . $w->month_end;
                    $user->work()->create([
                        'institution' => $w->company_name,
                        'title' => $w->title,
                        'country' => $w->country,
                        'startdate' => $sdate !== " " ? Carbon::parse($sdate)->startOfMonth() : null,
                        'enddate' => $edate !== " " ? Carbon::parse($edate)->startOfMonth() : null,
                        'description' => $w->description
                    ]);
                }
            } catch (\Throwable $th) {
                //throw $th;
                // print( $th);
                dd($th);
            }
            
        }
    }
}
