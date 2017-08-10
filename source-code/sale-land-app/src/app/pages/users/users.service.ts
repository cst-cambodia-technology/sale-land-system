import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ApiResource} from "../../api.resource";
import 'rxjs/Rx';
import {Injectable} from "@angular/core";

/**
 * Created by sokho on 8/8/2017.
 */
@Injectable()
export class UserService{


    constructor(private http: Http){}


    index(): Observable<any>{
        let headers = new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')});
        return this.http.get(ApiResource.USERS, {headers: headers})
            .map(
                response => response.json(),
                error => error.json()
            );
    }
}