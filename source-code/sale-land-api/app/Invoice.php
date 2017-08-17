<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'modifiedAt';

    /**
     * Get the details for the invoice.
     */
    public function details()
    {
        return $this->hasMany('App\InvoiceDetail', 'invoiceId','id');
    }
}
