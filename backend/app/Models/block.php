<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class block extends Model
{
    use HasFactory, Notifiable ;

    protected $fillable = [
        'user_id',
        'blcked_user_id',
        
    ];
}
