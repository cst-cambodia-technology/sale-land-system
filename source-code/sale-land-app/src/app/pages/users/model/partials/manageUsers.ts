import {Item} from "./item";
/**
 * Created by sokho on 8/8/2017.
 */

export class ManageUsers{
    label: string;
    option: false;
    description: string;
    item: Item;

    constructor(){
        this.label = "Manage Users";
        this.item = new Item();
    }

}