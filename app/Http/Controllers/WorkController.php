<?php

namespace App\Http\Controllers;

use App\Work;
use Illuminate\Http\Request;
use App\Repositories\WorkRepository;
use App\Http\Resources\Work as WorkResource;
use Carbon\Carbon;

class WorkController extends Controller
{
    public function __construct(WorkRepository $repo)
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
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Validate
        $this->validate(request(),[
            'institution'=> 'string',
            'title'=> 'string',
            'country'=> 'string',
            'startdate'=> 'date',
            'enddate'=> 'date'
        ]);

        foreach( $request->all() as $req ){

            $r = new Request((array)$req);

            $newstartdate = Carbon::parse($request->input('startdate'))->toDateTimeString();

            $newenddate = Carbon::parse($request->input('enddate'))->toDateTimeString();

            $r->merge(['startdate'=>$newstartdate, 'enddate'=>$newenddate]);

            $wrk = $this->repo->createWork($r);
        }

        return $wrk;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Work  $work
     * @return \Illuminate\Http\Response
     */
    public function show($work)
    {
        //
        $work = WorkResource::collection($this->repo->findWork($work));
        //return work of specific user
        return $work;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Work  $work
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Work $work)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Work  $work
     * @return \Illuminate\Http\Response
     */
    public function destroy(Work $work)
    {
        //
    }
}
