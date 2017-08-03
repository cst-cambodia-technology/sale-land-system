import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {ApiResource} from "./api.resource";
import 'rxjs/Rx';

@Injectable()
export class AuthService {

    constructor(private http: Http) {

    }

    authenticate(email: string, password: string, remember: boolean) {
        return this.http.post(
            ApiResource.AUTHENTICATE,
            {email: email, password: password, remember:remember},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => {
                    const token = response.json().token;
                    return {token: token};
                }
            )
            .do(
                data => {
                    localStorage.setItem('token', data.token);
                }
            );
    }
}

