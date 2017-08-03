import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {ApiResource} from "../../api.resource";
import {Project} from "./edit/edit";

@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  getProjects(){
    return this.http.get(
        ApiResource.PROJECTS,
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
  updateProject(id: number, project: Project) {
        return this.http.put(
            ApiResource.PROJECTS + id,
            project,
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
