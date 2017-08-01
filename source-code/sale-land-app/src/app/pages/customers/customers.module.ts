import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customers } from './customers.component';
import {AppTranslationModule} from "../../app.translation.module";
import {NgaModule} from "../../theme/nga.module";
import {routing} from "./customers.routing";
import { CustomerComponent } from './customer/customer.component';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    NgbModalModule,
    routing
  ],
  declarations: [
      Customers,
    CustomerComponent
  ],
  entryComponents: [
    CustomerComponent
  ],
})
export class CustomersModule { }