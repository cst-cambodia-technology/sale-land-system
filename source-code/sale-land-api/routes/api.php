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

/*Route developer test*/
Route::get('test', function(){
    return \App\Layout::first();
});
/*Route auth*/
Route::post('authenticate', 'JWTAuthController@authenticate');

/*Route middleware jwt.auth*/
Route::middleware(['jwt.auth'])->group(function(){
    /*Route project*/
    Route::get('projects', 'ProjectController@index');
    Route::post('projects', 'ProjectController@store');
    Route::get('projects/{id}', 'ProjectController@show');
    Route::put('projects/{id}', 'ProjectController@update');

    /*Route layout*/
    Route::get('layouts', 'LayoutController@index');
    Route::post('layouts', 'LayoutController@store');
    Route::get('layouts/{id}', 'LayoutController@show');
    Route::put('layouts/{id}', 'LayoutController@update');

});

