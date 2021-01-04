<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->enum('gender', ['m', 'f', 'o']);
            $table->date('birthdate');
            $table->string('country');
            $table->string('job');
            $table->string('address');
            $table->string('phone');
            $table->string('diploma');
            $table->enum('marital', ['m', 's', 'f', 'd', 'w']);
            $table->integer('number_children')->default(0);
            $table->text('languages');
            $table->text('driving_licenses');
            $table->string('email')->unique();
            $table->text('photo')->nullable();
            $table->string('matricule')->nullable();
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
        Schema::dropIfExists('employees');
    }
}
