import {Input} from "@angular/core";
/**
 * Created by sokho on 7/28/2017.
 */

export class Layout{

    public id: number;
    public prefix: string;
    public no: number;
    public to: number;
    public label: string;
    public projectId: number;
    public project: {
        id: number;
        name: string;
    }
    public size: string = null;
    public price: number = null ;
    public status: string;
    public description: string = null;
    constructor(){

    }

}