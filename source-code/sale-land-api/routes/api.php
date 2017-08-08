<?php

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

    /*Route seller*/
    Route::get('sellers', 'SellerController@index');
    Route::post('sellers', 'SellerController@store');
    Route::get('sellers/{id}', 'SellerController@show');
    Route::put('sellers/{id}', 'SellerController@update');

    /*Route customer*/
    Route::get('customers', 'CustomerController@index');
    Route::post('customers', 'CustomerController@store');
    Route::get('customers/{id}', 'CustomerController@show');
    Route::put('customers/{id}', 'CustomerController@update');

    /*Route user*/
    Route::get('users', 'UserController@index');
    Route::post('users', 'UserController@store');
    Route::get('users/{id}', 'UserController@show');
    Route::put('users/{id}', 'UserController@update');
});

