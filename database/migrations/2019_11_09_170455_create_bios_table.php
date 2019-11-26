<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bios', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title')->nullable();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('surname');
            $table->string('gender');
            $table->string('dob');
            $table->string('phone');
            $table->string('address');
            $table->string('altphone')->nullable();
            $table->string('altemail')->nullable();
            $table->string('citizenship');
            $table->string('residency');
            $table->string('qualification')->nullable();
            $table->string('field_of_study')->nullable();
            $table->text('summary')->nullable();
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('bios');
    }
}
