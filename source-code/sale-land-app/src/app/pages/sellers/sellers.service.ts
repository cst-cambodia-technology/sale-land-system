// import {Headers, Http} from "@angular/http";
// import {Injectable} from "@angular/core";
// import {AppSetting} from "app/app.setting";
// @Injectable()
// export class SellerService{
//     constructor(private http: Http){
//
//     }
//     getSeller(){
//         return this.http.get(
//             AppSetting.API_URL + 'sellers',
//             {headers: new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')})}
//         )
//             .map(
//                 response => response.json(),
//                 error => error.json()
//             );
//     }
// }