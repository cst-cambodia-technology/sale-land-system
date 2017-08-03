import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {ApiResource} from "../../api.resource";
import {Customer} from "./customer/customer";

@Injectable()
export class CustomersService {
  constructor(private http: Http) { }

  index(){
    return this.http.get(
        ApiResource.CUSTOMERS,
        {headers: new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')})}
        )
        .map(
            response => response.json(),
            error => error.json()
        );
  }

  show(id: number) {
    return this.http.get(
        ApiResource.CUSTOMERS + id ,
        {headers: new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')})}
        )
        .map(
            response => response.json(),
            error => error.json()
        );
  }

  store(customer: Customer) {
    return this.http.post(
        ApiResource.CUSTOMERS,
        customer,
        {headers: new Headers({
            'Authorization': 'Bearer' + localStorage.getItem('token'),
            'X-Requested-With': 'XMLHttpRequest'
        })})
        .map(
            response => response.json(),
            error => error.json()
        );
  }

  update(id: number, customer: Customer) {
    return this.http.put(
        ApiResource.CUSTOMERS + id,
        customer,
        {headers: new Headers({
          'Authorization': 'Bearer' + localStorage.getItem('token'),
          'X-Requested-With': 'XMLHttpRequest'
        })})
        .map(
            response => response.json(),
            error => error.json()
        );
  }
}
