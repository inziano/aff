<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Login route
Route::post('user/login', 'UserController@login');

// User route
Route::apiResource('user','UserController');

// Education route
Route::apiResource('education', 'EducationController');

// Bio route
Route::apiResource('bio', 'BioController');

// Work route
Route::apiResource('work', 'WorkController');

// Publication route
Route::apiResource('publication', 'PublicationController');

// Messages route
Route::apiResource('message','MessageController');

// Invitation route
Route::apiResource('invitation', 'InvitationController');