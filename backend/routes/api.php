<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FeedController;
use Illuminate\Support\Facades\Auth;


    Route::group(['middleware' => 'user.role'], function () {

        Route::post('/logout', [AuthController::class, "logout"])->name("logout");
        Route::post('/get_favorites', [FeedController::class, "getFavorites"])->name("get-favorites");
        Route::post('/block_user/{id?}', [FeedController::class, "blockUser"])->name("block-user");
        Route::post('/add_favorite/{id?}', [FeedController::class, "addFavorite"])->name("add-favorite");
        Route::get('/get_users', [FeedController::class, "getUser"])->name("get_users");
        Route::post('/get_messages/{id?}', [FeedController::class, "getMessages"])->name("get-messages");
        Route::post('/add_messages', [FeedController::class, "addMessages"])->name("add-messages");




        
    });
    Route::post('/register', [AuthController::class, "register"])->name("register");
    Route::post('/login', [AuthController::class, "login"])->name("login");



