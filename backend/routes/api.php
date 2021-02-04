<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::prefix('student')->group(function() {
	Route::get('/data', 'StudentController@data');
	Route::post('/create', 'StudentController@create');
	Route::get('/edit/{student_id}', 'StudentController@edit');
	Route::put('/update/{student_id}', 'StudentController@update');
	Route::delete('/delete/{student_id}', 'StudentController@delete');
});