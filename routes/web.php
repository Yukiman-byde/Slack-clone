<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'auth'], function(){
    Route::get('/slack', 'SlackController@slack');
    Route::post('/slack', 'SlackController@create_channel');
    Route::get('/channel', 'SlackController@channel');
    Route::get('/rooms', 'SlackController@chat');
    Route::post('/rooms', 'SlackController@chat');
    Route::get('/rooms/{name}', 'SlackController@get_comment');
    Route::post('/comment', 'SlackController@comment');
    Route::get('/user', 'SlackController@user');
});

//Route::post('/comment', 'SlackController@comment');

Route::get('/', 'HomeController@index');
Auth::routes();

