<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSellersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sellers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title','15')->nullable()->default(null);
            $table->string('givenName','25')->nullable()->default(null);
            $table->string('middleName','25')->nullable()->default(null);
            $table->string('familyName','25')->nullable()->default(null);
            $table->string('suffix','10')->nullable()->default(null);
            $table->string('displayName','100');
            $table->string('companyName','100')->nullable()->default(null);
            $table->string('jobTitle','100')->nullable()->default(null);
            $table->string('image','2000')->nullable()->default(null);
            $table->enum('gender', ['Male', 'Female'])->nullable()->default(null);
            $table->date('birthDate')->nullable()->default(null);
            $table->json('contact')->nullable()->default(null);
            $table->json('address')->nullable()->default(null);
            $table->string('note','4000')->nullable()->default(null);
            $table->enum('status',['Active','Inactive']);
            $table->integer('createdBy')->nullable()->default(null);
            $table->integer('modifiedBy')->nullable()->default(null);
            $table->timestamp('createdAt')->nullable()->default(null);
            $table->timestamp('modifiedAt')->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sellers');
    }
}
