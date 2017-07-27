import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {AppSetting} from "../../app.setting";

@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  getProjects(){
    return this.http.get(
        AppSetting.API_URL + 'projects',
        {headers: new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')})}
        )
        .map(
            response => response.json(),
            error => error.json()
        );
  }

  getProject(id: number) {
    return this.http.get(
        AppSetting.API_URL + 'projects/' + id ,
        {headers: new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')})}
        )
        .map(
            response => response.json(),
            error => error.json()
        );
  }

  storeProject(name: string, description: string) {
    return this.http.post(
        AppSetting.API_URL + 'projects',
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
        AppSetting.API_URL + 'projects/' + id,
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
