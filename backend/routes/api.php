<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FeedController;
use Illuminate\Support\Facades\Auth;


    Route::group(['middleware' => 'auth:api'], function () {

        Route::post('/logout', [AuthController::class, "logout"])->name("logout");
        Route::post('/get_favorites', [FeedController::class, "getFavorites"])->name("get-favorites");
        Route::post('/block_user/{id?}', [FeedController::class, "blockUser"])->name("block-user");
        
    });
    Route::post('/register', [AuthController::class, "register"])->name("register");
    Route::post('/login', [AuthController::class, "login"])->name("login");



