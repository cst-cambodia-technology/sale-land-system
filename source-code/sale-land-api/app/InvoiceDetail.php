<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InvoiceDetail extends Model
{
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'modifiedAt';

    /**
     * Get the invoice that owns the invoice detail.
     */
    public function invoice()
    {
        return $this->belongsTo('App\Invoice','invoiceId','id');
    }
}
