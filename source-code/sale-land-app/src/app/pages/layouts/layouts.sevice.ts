import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Layout} from "./layouts.model";
import {ApiResource} from "../../api.resource";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
/**
 * Created by sokho on 7/28/2017.
 */
@Injectable()
export class LayoutsService{
    constructor(private http: Http){

    }

    getLayouts(): Observable<any>{
        let headers = new Headers({
            'Authorization': 'Bearer' + localStorage.getItem('token'),
            'X-Requested-With': 'XMLHttpRequest'
        });
        let option  = new RequestOptions({headers: headers});

        return this.http.get(ApiResource.LAYOUTS, option)
            .map(
                (res: Response)=>{
                    return res.json();
                }
            );
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