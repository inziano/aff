<?php

namespace App\Http\Controllers;

use App\Invitation;
use App\User;
use Illuminate\Http\Request;
use App\Http\Resources\Invitation as InvitationResource;
use App\Repositories\InvitationRepository;
use App\Events\InvitationSent;


class InvitationController extends Controller
{

    public function __construct(InvitationRepository $repo)
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
        return InvitationResource::collection(Invitation::all()->paginate(12));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::where('id',$request->input('user_id'))->first();
        //
        $this->validate(request(),[
            'email'=> 'required',
            'message'=> 'required'
        ]);

        $emails = json_encode( $request->input('email'));

        // Invite
        $request->merge(['email'=>$emails]);

        // Store invite
        $invite = $this->repo->createInvitation($request);

        // Event 
        event( new InvitationSent($user, $invite));

        return $invite;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Invitation  $invitation
     * @return \Illuminate\Http\Response
     */
    public function show(Invitation $invitation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Invitation  $invitation
     * @return \Illuminate\Http\Response
     */
    public function edit(Invitation $invitation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Invitation  $invitation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Invitation $invitation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Invitation  $invitation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invitation $invitation)
    {
        //
    }
}
