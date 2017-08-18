/**
 * Created by Sokhon Pang on 8/16/2017.
 */
import { NgModule }      from '@angular/core';
import {CommonModule, DatePipe}  from '@angular/common';
import {routing} from "./sales.routing";
import {Invoices} from "./invoice/invoices";
import {Sales} from "./sales";
import {FormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {AppTranslationModule} from "../../app.translation.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        AppTranslationModule,
        NgbModule,
        routing
    ],
    declarations: [
        Sales,
        Invoices,
    ],
    providers: [DatePipe]
})
export class SalesModule {
}