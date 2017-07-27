<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Layout extends Model
{
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'modifiedAt';

    /**
     * Get the project that owns the layout.
     */
    public function project()
    {
        return $this->belongsTo('App\Project','projectId','id');
    }
}
