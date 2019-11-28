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

// Membership route
Route::patch('user/membership', 'UserController@membership');

// Download publication
Route::get('publication/download/{id}','PublicationController@download');

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

// Event routes
Route::apiResource('event', 'EventController');

// Thread routes
Route::apiResource('thread', 'ThreadController');

// Reply routes
Route::apiResource('reply', 'ReplyController');