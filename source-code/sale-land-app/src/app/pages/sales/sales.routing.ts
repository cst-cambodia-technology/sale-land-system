/**
 * Created by Sokhon Pang on 8/16/2017.
 */
import { Routes, RouterModule }  from '@angular/router';
import {Sales} from "./sales";
import {Invoices} from "./invoice/invoices";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: Sales,
        children: [
            { path: 'invoice', component: Invoices }
        ]
    }
];

export const routing = RouterModule.forChild(routes);