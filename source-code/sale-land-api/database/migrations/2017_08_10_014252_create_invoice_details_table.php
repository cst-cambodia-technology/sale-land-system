<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoiceDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('invoiceId');
            $table->integer('layoutId');
            $table->string('layout', 100);
            $table->string('size', 100)->nullable()->default(null);
            $table->decimal('price', 10, 2)->nullable()->default(null);
            $table->string('description', 4000)->nullable()->default(null);
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
        Schema::dropIfExists('invoice_details');
    }
}
