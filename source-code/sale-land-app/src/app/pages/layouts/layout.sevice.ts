import {Headers, Http, RequestOptions} from "@angular/http";
import {Layout} from "./layout.model";
import {ApiResource} from "../../api.resource";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
/**
 * Created by sokho on 7/28/2017.
 */
@Injectable()
export class LayoutService{
    constructor(private http: Http){

    }

    addNewLayout(layout: Layout): Observable<any>{
        let body = layout;
        let headers = new Headers({
            'Authorization': 'Bearer' + localStorage.getItem('token'),
            'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(ApiResource.LAYOUTS, body, options)
            .map(
                response => response.json(),
                error => error.json()
            );

    }
}