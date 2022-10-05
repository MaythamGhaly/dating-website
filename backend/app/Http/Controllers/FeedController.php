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

    public function getProfile()
    {
        $user_id = Auth::id();
        $users = DB::table('users')
            ->select('*')
            ->where('id', '=', $user_id)
            ->get();

        return response()->json([
            "status" => "Success",
            "data" => $users
        ]);
    }

    public function getBlocks()
    {
        $user_id = Auth::id();
        $users = DB::table('users')
            ->select('*')
            ->join('blocks', 'users.id', '=', 'blocks.blcked_user_id')
            ->where('blocks.user_id', '=', $user_id)
            ->get();

        return response()->json([
            "status" => "Success",
            "data" => $users
        ]);
    }

    public function deletBlocks($id)
    {
        $user_id = Auth::id();
        $users = DB::table('blocks')
            ->where('blocks.user_id', '=', $user_id)
            ->where('blocks.blcked_user_id', '=', $id)
            ->delete();

        return response()->json([
            "status" => "Success",
            "data" => $users
        ]);
    }

    public function deletFavorite($id)
    {
        $user_id = Auth::id();
        $users = DB::table('favorites')
            ->where('favorites.user_id', '=', $user_id)
            ->where('favorites.favorite_id', '=', $id)
            ->delete();

        return response()->json([
            "status" => "Success",
            "data" => $users
        ]);
    }

    public function addFavorite($id)
    {
        $user_id = Auth::id();

        if (!$id) {
            return response()->json([
                'message' => 'Add failed'
            ]);
        }
        $user = DB::insert('insert into favorites (user_id, favorite_id) values (?, ?)', [$user_id, $id]);

        return response()->json([
            'message' => 'User Created!',
            'user' => $user
        ]);
    }

    public function getUser()
    {
        $user_id = Auth::id();
        // $gender_interested= Auth::gender_interested();
        if (!$user_id) {
            return response()->json([
                'message' => 'receive failed'
            ]);
        }
        $user = DB::table('users')
            ->select('*')
            ->where('id','<>',$user_id)
            // ->where('gender_interested','=',$gender_interested)
            ->whereNotIn('id', DB::table('blocks')->select('blcked_user_id')->where('user_id', '=', $user_id))
            ->get();

        return response()->json([
            'message' => 'Done!',
            'user' => $user
        ]);
    }

    public function getReceiveMessages()
    {

        $users = DB::table('chats')
            ->select('*')
            ->join('users', 'chats.receiver_id', '=', 'users.id')
            ->orderBy('chats.created_at', 'DESC')
            ->get();

        return response()->json([
            "status" => "Success",
            "data" => $users
        ]);
    }

    public function addMessages(Request $request)
    {
        $user_id = Auth::id();
        $receiver_id = $request->receiver_id;
        $message = $request->message;


        if (!$receiver_id && !$message) {
            return response()->json([
                'message' => 'Add failed'
            ]);
        }
        $user = DB::insert('insert into chats (sender_id, message, receiver_id) values (?, ?, ?)', [$user_id, $message, $receiver_id]);

        return response()->json([
            'message' => 'message added!',
            'user' => $user
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
