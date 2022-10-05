<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;

class AuthController extends Controller
{

    public function register(){

        $validator = validator()->make(request()->all(),[
            'name'=>'string|required',
            'email'=>'email|required',
            'password'=>'string|required',
            'gender'=>'string|required',
            'gender_interested'=> 'string|required',
            'bio'=>'string|required',
            'age'=>'string|required',
            'profile_picture'=>'string|required',
            'latitude'=>'string|required',
            'longitude'=>'string|required'

        ]);
        if ($validator->fails()){
            return response()->json([
                'message' => 'registration faild!'
            ]);
        }
        $user = User::create([
            'name' => request()->get('name'),
            'email' => request()->get('email'),
            'password'=>bcrypt(request()->get('password')),
            'gender'=>request()->get('gender'),
            'gender_interested'=>request()->get('gender_interested'),
            'bio'=>request()->get('bio'),
            'age'=>request()->get('age'),
            'profile_picture'=>request()->get('profile_picture'),
            'latitude'=>request()->get('latitude'),
            'longitude'=>request()->get('profile_picture'),

        ]);
        return response()-> json([
            'message'=>'User Created!',
            'user'=>$user
        ]);
    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'email/password incorrect!'], 401);
        }
        return $this->respondWithToken($token);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => config('jwt.ttl')
        ]);
    }
}
