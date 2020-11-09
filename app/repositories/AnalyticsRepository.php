<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\User;
use App\Bio;
use App\Publication;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class AnalyticsRepository {
    
    // Members
    public function getMemberStats()
    {
        // Query members
        $countries = Bio::select('citizenship', DB::raw('count(*) as total'))->whereNotNull('citizenship')->groupBy('citizenship')->get();

        $admissionYear = User::where('status','Member')->select(DB::raw('YEAR(approval_date) as year'), DB::raw('count(*) as total'))->whereNotNull('approval_date')->groupBy(DB::raw('YEAR(approval_date)'))->get();

        $member = User::where('status','member')->count();

        $applicant = User::where('status','approved')->count();
    
        $total = User::count();

        return [
            'members' => $member,
            'admissions' => $admissionYear,
            'applicants' => $applicant,
            'total' => $total,
            'countries'=> $countries
        ];
 
    }

    // Publications
    public function getPublicationStats()
    {
        // Query publications
        $pubs = Publication::count();

        return $pubs;
    }
}