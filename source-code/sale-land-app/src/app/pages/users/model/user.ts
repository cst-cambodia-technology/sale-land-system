import {Authorization} from "./partials/authorization";
/**
 * Created by sokho on 8/8/2017.
 */

export class UserList{
    id: number;
    displayName: string;
    authorized: Authorization;
    email: string;
    status: string;
    constructor(){
        this.authorized = new Authorization();
    }
}

export class UserStore{
    displayName: string;
    email: string;
    password: string;
    authorized: Authorization;

    constructor(){
        this.authorized = new Authorization();
    }
}



