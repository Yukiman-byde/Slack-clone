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

Route::get('/', 'SlackController@slack');
Route::post('/', 'SlackController@slack_post');
Route::get('/channel', 'SlackController@channel');
Route::get('/rooms', 'SlackController@chat');
Route::post('/rooms', 'SlackController@chat');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
