<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'modifiedAt';

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'identity' => 'array', 'contact' => 'array', 'address' => 'array'
    ];
}
