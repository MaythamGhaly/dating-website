<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Relationship;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\DB;
class FeedController extends Controller
{
    public function getFavorites(){
        $user_id=Auth::id();
        $users = DB::table('users')
                ->select('*')
                ->join('favorites', 'users.id', '=', 'favorites.favorite_id')
                ->where('favorites.user_id','=',$user_id)
                ->get();

        return response()->json([
            "status" => "Success",
            "data" => $users
        ]);
    }
}
