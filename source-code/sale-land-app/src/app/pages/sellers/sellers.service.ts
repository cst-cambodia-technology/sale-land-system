import {Headers, Http, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {ApiResource} from "../../api.resource";
import {Seller} from "./seller/sellers";


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

    show(id: number){
        return this.http.get(
            ApiResource.SELLERS + id,
            {headers: new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')})})
            .map(
                response => response.json(),
                error => error.json()

            );
    }
    storeSellers(seller: Seller){
        return this.http.post(
            ApiResource.SELLERS,
            seller,
            {headers: new Headers({
                'Authorization': 'Bearer' + localStorage.getItem('token'),
                'X-Requested-With': 'XMLHttpRequest' })})
            .map(
                response => response.json(),
                error => error.json()

            );
    }
    updateSellers(id: number, seller: Seller){
        return this.http.put(
            ApiResource.SELLERS + id,
            seller,
            {headers: new Headers({
                'Authorization': 'Bearer' + localStorage.getItem('token'),
                'X-Requested-With': 'XMLHttpRequest' })})
                .map(
                    response => response.json(),
                    error => error.json()

                );
    }
}