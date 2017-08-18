/**
 * Created by Sokhon Pang on 8/16/2017.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {routing} from "./sales.routing";
import {Invoices} from "./invoice/invoices";
import {Sales} from "./sales";
import {FormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations: [
        Sales,
        Invoices,
    ]
})
export class SalesModule {
}