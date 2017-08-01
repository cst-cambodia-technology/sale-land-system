import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {ApiResource} from "../../api.resource";

@Injectable()
export class CustomersService {
  constructor(private http: Http) { }

  getCustomers(){
    return this.http.get(
        ApiResource.CUSTOMERS,
        {headers: new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')})}
        )
        .map(
            response => response.json(),
            error => error.json()
        );
  }

  getProject(id: number) {
    return this.http.get(
        ApiResource.PROJECTS + id ,
        {headers: new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')})}
        )
        .map(
            response => response.json(),
            error => error.json()
        );
  }

  storeProject(name: string, description: string) {
    return this.http.post(
        ApiResource.PROJECTS,
        {name: name, description: description},
        {headers: new Headers({
            'Authorization': 'Bearer' + localStorage.getItem('token'),
            'X-Requested-With': 'XMLHttpRequest'
        })})
        .map(
            response => response.json(),
            error => error.json()
        );
  }

  updateProject(id: number, name: string, description: string) {
    return this.http.put(
        ApiResource.PROJECTS + id,
        {name: name, description: description},
        {headers: new Headers({
          'Authorization': 'Bearer' + localStorage.getItem('token'),
          'X-Requested_With': 'XMLHttpRequest'
        })})
        .map(
            response => response.json(),
            error => error.json()
        );
  }
}