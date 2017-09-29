<?php

/**
 * Created by PhpStorm.
 * User: developer
 * Date: 2017-08-21
 * Time: 9:03 AM
 */

namespace App\Http\Controllers\Helper;

class LayoutSchema
{
    public static $OFFSET           =   0;
    public static $LIMIT            =   25;
    public static $FIELDS           =   'id,projectId,prefix,no,label,size,price,description,status,createdBy,modifiedBy,createdAt,modifiedAt';

    public static $ID               =   'id';
    public static $PROJECT_ID       =   'projectId';
    public static $PREFIX           =   'prefix';
    public static $NO               =   'no';
    public static $LABEL            =   'label';
    public static $SIZE             =   'size';
    public static $PRICE            =   'price';
    public static $DESCRIPTION      =   'description';
    public static $STATUS           =   'status';
    public static $CREATED_BY       =   'createdBy';
    public static $MODIFIED_BY      =   'modifiedBy';
    public static $CREATED_AT       =   'createdAt';
    public static $MODIFIED_AT      =   'modifiedAt';

    public static $RELATIONS        =   'project';
}