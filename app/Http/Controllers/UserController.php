<?php

namespace App\Http\Controllers;

use Keygen\Keygen;
use App\User;
use App\Filters\UserFilters;
use App\Http\Resources\User as UserResource;
use App\Repositories\UserRepository;
use App\Events\UserRegistered;
use App\Events\SearchUsers;
use App\Events\UserModified;
use App\Events\PasswordReset;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;


class UserController extends Controller
{
    use AuthenticatesUsers;

    public function __construct(UserRepository $repo)
    {
        $this->repo = $repo;
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index( Request $request, UserFilters $filters)
    {
        //Show all the users
        return UserResource::collection(User::filter($filters)->with(['bio','education','work'])->paginate(24));
    }

    /**
     * login
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        // Attempt auth
        if (Auth::attempt($credentials))
        {
            $user = Auth::user();

            Auth::login( $user );
            // $user = User::with('roles:name')->where('email', $request->input('email'))->first();

            return $user;
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);

    }

    public function logout(Request $request)
    {
        Auth::logout();
    }

    /**
     * Password reset
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
    */
    public function resetPassword( Request $request )
    {
        // Check if account exists 
        if ( User::where('email', $request->input('email'))->exists() )
        {
            // User
            $user = User::where('email',$request->input('email'))->first();

            // Generate unique reset token.
            $reset_code = Keygen::alphanum()->generate();

            // Store token in database
            DB::table('password_resets')->insert(['email'=> $user->email, 'token'=> $reset_code]);

            // Send email notification with token
            event( new PasswordReset( $user, $reset_code ));

            return 'okay';

        } else {
            // Abort
            return abort(404, 'User does not exist');
        }
    }

    /**
     * Match token
     * 
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Http\Response 
     * 
     */
    public function verifyResetToken( Request $request)
    {
        $reset = DB::table('password_resets')->where('token', $request->input('token'))->exists();

        // Check token matches existing reset token
        if ( $reset )
        {
            $email = DB::table('password_resets')->where('token', $request->input('token'))->first()->email;

            // Return okay
            return User::where('email',$email)->first();
        } else {
            // Abort
            return abort(404, 'Bad token');
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
        if ( $request->has('image') ) {

            $user = User::where('id', $request->id)->first();
            
            $title = 'title2';
            // Store image to cloud
            $imgpath = Storage::cloud()->putFileAs('profile', $request->file('image'), $title);

            // Create new request
            $req = new Request();

            $req->replace(['image'=> $imgpath]);


            $this->repo->updateUser($user, $req);

        } else {

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
            event( new UserRegistered($user));

            // Return login user
            return $this->login($request);
            // return User::with('roles:name')->where('email', $user->email)->first();
        }
        
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


    public function statistics()
    {
        $members = User::where('status', 'member')->count();
        $applicants = User::whereHas('bio', function(Builder $query){ 
            $query->whereNull('firstname');
        })->count();
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
        return UserResource::collection(User::where('id', $user->id)->with(['bio','education','work','roles:name'])->get());
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
        if ( $request->has('password')){
            // Hash password
            $pswd = Hash::make($request->input('password'));
            // Merge
            $request->merge(['password'=>$pswd]);

            $this->repo->updateUser($user, $request);

        } else {

            $this->repo->updateUser($user, $request);
        }
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
