import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {AppSetting} from "./app.setting";

@Injectable()
export class AuthService {

    constructor(private http: Http) {

    }

    authenticate(email: string, password: string) {
        return this.http.post(
            AppSetting.API_URL + 'authenticate',
            {email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        );
    }
}

