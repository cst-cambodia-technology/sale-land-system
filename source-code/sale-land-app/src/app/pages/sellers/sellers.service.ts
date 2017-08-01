import {Headers, Http, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {ApiResource} from "../../api.resource";

@Injectable()
export class SellersService{
    constructor(private http: Http){}

    getSellers(){
        return this.http.get(
            ApiResource.SELLERS,
            {headers: new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')})}
        )
            .map(
                response => response.json(),
                error => error.json()
            );
    }
}