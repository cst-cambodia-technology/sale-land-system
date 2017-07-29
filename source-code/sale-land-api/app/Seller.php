<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'modifiedAt';

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'contact' => 'array', 'address' => 'array'
    ];
}
