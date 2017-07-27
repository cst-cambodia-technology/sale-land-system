<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLayoutsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('layouts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('projectId');
            $table->string('prefix',10);
            $table->integer('no',false,true);
            $table->string('label',100);
            $table->string('size',100)->nullable()->default(null);
            $table->decimal('price',10,2)->nullable()->default(null);
            $table->string('description',4000)->nullable()->default(null);
            $table->enum('status',['Open', 'Blocked', 'Reserved', 'Closed']);
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
        Schema::dropIfExists('layouts');
    }
}
