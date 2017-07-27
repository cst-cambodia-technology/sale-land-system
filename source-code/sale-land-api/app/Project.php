<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'modifiedAt';

    /**
     * Get the layouts for the project.
     */
    public function layouts()
    {
        return $this->hasMany('App\Layout', 'projectId','id');
    }
}
