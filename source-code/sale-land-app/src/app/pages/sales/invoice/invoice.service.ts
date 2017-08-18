import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {ApiResource} from "../../../api.resource";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
/**
 * Created by Sokhon Pang on 8/17/2017.
 */

@Injectable()
export class InvoiceService{
    constructor(private http: Http){}

    getInvoiceNo(): Observable<any>{
        let headers = new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')});

        return this.http.get(ApiResource.INVOICES + '?option=InvoiceNo', {headers: headers})
            .map(
                (res: Response)=>{
                    return res.json();
                },
                (error: Error) =>{
                    return console.log(error.message);
                }
            );
    }
}