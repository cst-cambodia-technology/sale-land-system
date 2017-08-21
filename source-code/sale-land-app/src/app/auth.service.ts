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
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: token, decoded: JSON.parse(window.atob(base64))};
                }
            )
            .do(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('tokenInfo', JSON.stringify(data.decoded));
                }
            );
    }
}

