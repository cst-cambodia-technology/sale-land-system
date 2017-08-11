import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customers } from './customers.component';
import {AppTranslationModule} from "../../app.translation.module";
import {NgaModule} from "../../theme/nga.module";
import {routing} from "./customers.routing";
import {CustomerComponent } from './customer/customer.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    NgbModule.forRoot(),
    FormsModule,
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
