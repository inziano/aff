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

Route::post('user/search', 'UserController@search');


// Education route
Route::apiResource('education', 'EducationController');

// Bio route
Route::apiResource('bio', 'BioController');

// Work route
Route::apiResource('work', 'WorkController');

// Publication route
Route::apiResource('publication', 'PublicationController');

Route::post('publication/search', 'PublicationController@search');

// Messages route
Route::apiResource('message','MessageController');

// Invitation route
Route::apiResource('invitation', 'InvitationController');

// Event routes
Route::apiResource('event', 'EventController');

Route::post('event/search', 'EventController@search');


// Thread routes
Route::apiResource('thread', 'ThreadController');

Route::post('thread/filter', 'ThreadController@filter');

Route::post('thread/search', 'ThreadController@search');

// Reply routes
Route::apiResource('reply', 'ReplyController');

// Topic routes
Route::apiResource('topic', 'TopicController');

// Vacancy routes
Route::apiResource('vacancy', 'VacancyController');

Route::post('vacancy/search', 'VacancyController@search');

// Vacancy Application routes
Route::apiResource('vacancyapplication', 'VacancyApplicationController');

Route::post('vacancyapplication/search', 'VacancyApplicationController@search');

// News routes
Route::apiResource('news', 'NewsController');

Route::post('news/search','NewsController@search');