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
    private headers = new Headers({
        'Authorization': 'Bearer' + localStorage.getItem('token'),
        'X-Requested-With': 'XMLHttpRequest'
    });
    private option = new RequestOptions({ headers: this.headers });

    constructor(private http: Http){

    }

    getLayouts(): Observable<any>{
        return this.http.get(ApiResource.LAYOUTS, this.option)
            .map(
                (res: Response)=>{
                    return res.json();
                }

            );
    }

    getLayout(id: number): Observable<Layout>{
        return this.http.get(ApiResource.LAYOUTS+id, this.option)
            .map(
                (res: Response)=>{
                    return res.json();
                }
            );
    }

    addNewLayout(layout: Layout[]): Observable<any>{
        let body = { 'layouts': layout };
        // let headers = new Headers({
        //     'Authorization': 'Bearer' + localStorage.getItem('token'),
        //     'X-Requested-With': 'XMLHttpRequest'
        // });
        // let options = new RequestOptions({ headers: headers });

        return this.http.post(ApiResource.LAYOUTS, body, this.option)
            .map(
                response => response.json(),
                error => error.json()
            );

    }

    updateLayout(id: number, layout: Layout): Observable<any>{

        let body = layout;
        return this.http.put(ApiResource.LAYOUTS+id, body, this.option)
            .map(
                response => response.json(),
                error => error.json()
            );
    }



}