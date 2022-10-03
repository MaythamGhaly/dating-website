<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
class FeedController extends Controller
{
    public function getFavorites(){
        $user_id=Auth::id();
        echo $user_id;
        $users = User::join('favorites', 'users.id', '=', 'favorites.user_id')
               ->where(['id', '=' , $user_id]);

        return response()->json([
            "status" => "Success",
            "data" => $users
        ]);
    }
}
