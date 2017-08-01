import {Headers, Http, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Sellers} from "./sellers.modal";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {ApiResource} from "../../api.resource";

@Injectable()
export class SellersService{
    constructor(private http: Http){

    }
    addNewSellers(sellers: Sellers): Observable<any>{
    let body = sellers;
    let headers = new Headers({
        'Authorization': 'Bearer' + localStorage.getItem('token'),
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(ApiResource.SELLERS, body, options)
        .map(
            response => response.json(),
            error => error.json()
        );
    }
}