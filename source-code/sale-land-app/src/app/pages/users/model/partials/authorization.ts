import {ManageUsers} from "./manageUsers";
/**
 * Created by sokho on 8/8/2017.
 */
export class Authorization {
    managesUsers: ManageUsers;

    constructor(){
        this.managesUsers = new ManageUsers();
    }

}