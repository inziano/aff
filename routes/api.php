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

// / Analytics
Route::get('stats', 'AnalyticsController@index');

// Login route
Route::post('user/login', 'UserController@login');

// Login route
Route::get('user/logout', 'UserController@logout');


// Reset password
Route::post('user/reset', 'UserController@resetPassword');

Route::post('user/verify', 'UserController@verifyResetToken');

// Membership route
Route::patch('user/membership', 'UserController@membership');

// Download publication
Route::get('publication/download/{id}','PublicationController@download');

// User route
Route::apiResource('user','UserController');

// User notifications
Route::get('usernotification', 'UserNotificationController@index');

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

// Topic routes
Route::apiResource('topic', 'TopicController');

Route::post('topic/subscribe/{id}', 'TopicController@subscribe');

Route::post('topic/unsubscribe/{id}', 'TopicController@unsubscribe');

// Vacancy routes
Route::apiResource('vacancy', 'VacancyController');

// Vacancy Application routes
Route::apiResource('vacancyapplication', 'VacancyApplicationController');

// News routes
Route::apiResource('news', 'NewsController');

// Gallery
Route::apiResource('gallery', 'GalleryController');
