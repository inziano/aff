<?php

namespace App\Http\Controllers;

use App\User;
use Keygen\Keygen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Repositories\UserRepository;
use App\Events\PasswordReset;
use Carbon\Carbon;


class AuthController extends Controller
{

    /**
     * Class construct
     * 
     */
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
        //
    }

    /**
     * Login
     * 
     * @param Request $request
     * @return User $user
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        // Attempt auth
        if (Auth::attempt($credentials))
        {
            $request->session()->regenerate();

            $user = User::with('roles:name')->where('email', $request->input('email'))->first();

            return $user;
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    /**
     * Logout
     * 
     * @param Request $request
     * @return void
     */
    public function logout( Request $request)
    {
        Auth::logout();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate 
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
    }

    /**
     * Password reset
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
    */
    public function resetPassword( Request $request )
    {
        // Check if account exists b
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
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
