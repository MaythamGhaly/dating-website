<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\block;
use Illuminate\Database\Eloquent\Factories\Relationship;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\DB;

class FeedController extends Controller
{
    public function getFavorites()
    {
        $user_id = Auth::id();
        $users = DB::table('users')
            ->select('*')
            ->join('favorites', 'users.id', '=', 'favorites.favorite_id')
            ->where('favorites.user_id', '=', $user_id)
            ->get();

        return response()->json([
            "status" => "Success",
            "data" => $users
        ]);
    }

    public function blockUser($id)
    {
        $user_id = Auth::id();

        if (!$id) {
            return response()->json([
                'message' => 'blocked failed'
            ]);
        }
        $user = DB::insert('insert into blocks (user_id, blcked_user_id) values (?, ?)', [$user_id, $id]);

        return response()->json([
            'message' => 'User Created!',
            'user' => $user
        ]);
    }
}
