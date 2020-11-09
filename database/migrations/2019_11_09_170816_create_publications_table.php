<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePublicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('publications', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->longText('author')->nullable();
            $table->text('title')->nullable();
            $table->string('publisher')->nullable();
            $table->longText('abstract')->nullable();
            $table->longText('tags')->nullable();
            $table->date('publication_year')->nullable();
            $table->text('pubpath')->nullable();
            $table->integer('downloads')->default(0);
            $table->integer('views')->default(0);
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('publications');
    }
}
