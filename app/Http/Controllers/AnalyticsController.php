<?php

namespace App\Http\Controllers;

use App\Repositories\AnalyticsRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AnalyticsController extends Controller
{
    // Construct
    public function __construct( AnalyticsRepository $repo)
    {
        $this->repo = $repo;

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $stats = $this->repo->getMemberStats();

        return response()->json($stats);
    }
}
