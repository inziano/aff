<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Resources\User as UserResource;
use App\Repositories\UserRepository;
use App\Events\UserRegistered;
use App\Events\SearchUsers;
use App\Events\UserModified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function __construct(UserRepository $repo)
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
        //Show all the users
        return UserResource::collection(User::with(['bio','education','work'])->paginate(12));
    }

    /**
     * login
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        // Check if account exists
        if ( User::where('email',$request->input('email'))->exists() )
        {
            // 
            // return $request;
            // Get the user
            $user = User::where('email', $request->input('email'))->first();
            // Check password
            $pwd= Hash::check($request->input('password'), $user->password) ? $user: \abort(400, 'Password mismatch');

            return strval($pwd);

        }else {
            // abort
            return abort(404,'User does not exist');
        }
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
            'username'=> 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        // Hash password
        $pswd = Hash::make($request->input('password'));

        $request->merge(['password'=>$pswd]);

        // Validation passes
        $user = $this->repo->createUser($request);

        // Fire event
        // event( new UserRegistered($user));

        // Return 
        return $user;
    }

    /**
     * membership
     *
     * @param Request $request
     * @return void
     */
    public function membership(Request $request)
    {
        $user = $this->repo->updateStatus($request);
        // Fire event
        event( new UserModified());
        return $user;
    }

      
    /**
     * search
     *
     * @param Request $request
     * @return void
     */
    public function search(Request $request)
    {
        $results = $this->repo->searchUsers($request->input('search'));

        // TODO: Fail gracefully incase of error
        // Fire event
        event( new SearchUsers($results));

        // 
        return $results;
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, User $user)
    {
        //
    }
}
