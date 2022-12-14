<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            
            $table->id();
            $table->string("name");
            $table->string("email")->unique();
            $table->string("password");
            $table->string("gender");
            $table->string("gender_interested");
            $table->string("bio")->nullable();
            $table->string("age")->nullable();
            $table->string("profile_picture")->nullable();
            $table->string("latitude");
            $table->string("longitude");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
