<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('customerId');
            $table->string('no',21);
            $table->date('date');
            $table->string('memo',4000)->nullable()->default(null);
            $table->decimal('subTotal', 10, 2)->nullable()->default(null);
            $table->enum('discountMethod', ['Percent', 'Value'])->nullable()->default(null);
            $table->decimal('discount', 10, 2)->nullable()->default(null);
            $table->decimal('discountValue', 10, 2)->nullable()->default(null);
            $table->decimal('grandTotal', 10, 2)->nullable()->default(null);
            $table->decimal('deposit', 10, 2)->nullable()->default(null);
            $table->decimal('balance', 10, 2)->nullable()->default(null);
            $table->enum('status', ['Open', 'Overdue', 'Paid', 'Pending', 'Accepted', 'Closed', 'Rejected', 'Expired']);
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
        Schema::dropIfExists('invoices');
    }
}
