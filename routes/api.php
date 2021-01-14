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

// Analytics
Route::get('stats', 'AnalyticsController@index');

// Login route
Route::post('auth/login', 'AuthController@login');

// Logout route
Route::get('auth/logout', 'AuthController@logout');

// Register new user
Route::get('auth/register', 'AuthController@store');

// Reset password
Route::post('auth/reset', 'AuthController@resetPassword');

Route::post('auth/verify', 'AuthController@verifyResetToken');

// Membership route
Route::patch('users/membership', 'UserController@membership');

// Download publication
Route::get('publications/download/{id}','PublicationController@download');

// User route
Route::apiResource('users','UserController');

// User notifications
Route::get('usernotifications', 'UserNotificationController@index');

// Education route
Route::apiResource('education', 'EducationController');

// Bio route
Route::apiResource('bios', 'BioController');

// Work route
Route::apiResource('works', 'WorkController');

// Publication route
Route::apiResource('publications', 'PublicationController');

// Messages route
Route::apiResource('messages','MessageController');

// Invitation route
Route::apiResource('invitations', 'InvitationController');

// Event routes
Route::apiResource('events', 'EventController');

// Thread routes
Route::apiResource('threads', 'ThreadController');

// Reply routes
Route::apiResource('replies', 'ReplyController');

// Topic routes
Route::apiResource('topics', 'TopicController');

Route::post('topics/subscribe/{id}', 'TopicController@subscribe');

Route::post('topics/unsubscribe/{id}', 'TopicController@unsubscribe');

// Vacancy routes
Route::apiResource('vacancies', 'VacancyController');

// Vacancy Application routes
Route::apiResource('vacancyapplications', 'VacancyApplicationController');

// News routes
Route::apiResource('news', 'NewsController');

// Gallery
Route::apiResource('galleries', 'GalleryController');
