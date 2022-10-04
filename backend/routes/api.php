<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FeedController;
use Illuminate\Support\Facades\Auth;


    Route::group(['middleware' => 'user.role'], function () {

        Route::post('/logout', [AuthController::class, "logout"])->name("logout");
        Route::get('/get_favorites', [FeedController::class, "getFavorites"])->name("get-favorites");
        Route::get('/get_blocks', [FeedController::class, "getBlocks"])->name("get-blocks");
        Route::get('/block_user/{id?}', [FeedController::class, "blockUser"])->name("block-user");
        Route::get('/add_favorite/{id?}', [FeedController::class, "addFavorite"])->name("add-favorite");
        Route::get('/get_users', [FeedController::class, "getUser"])->name("get_users");
        Route::get('/get_messages', [FeedController::class, "getReceiveMessages"])->name("get-receive-messages");
        Route::post('/add_messages', [FeedController::class, "addMessages"])->name("add-messages");
        Route::get('/delete_blocks/{id?}', [FeedController::class, "deletBlocks"])->name("delet-blocks");
        Route::get('/delete_favorite/{id?}', [FeedController::class, "deletFavorite"])->name("delet-favorite");






        
    });
    Route::post('/register', [AuthController::class, "register"])->name("register");
    Route::post('/login', [AuthController::class, "login"])->name("login");



