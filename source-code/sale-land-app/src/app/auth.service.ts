import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {AppSetting} from "./app.setting";
import 'rxjs/Rx';

@Injectable()
export class AuthService {

    constructor(private http: Http) {

    }

    authenticate(email: string, password: string) {
        return this.http.post(
            AppSetting.API_URL + 'authenticate',
            {email: email, password: password},
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

