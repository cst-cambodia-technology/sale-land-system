import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Sellers} from "./sellers.component";
import {NgaModule} from "../../theme/nga.module";
import {AppTranslationModule} from "../../app.translation.module";
import {RouterModule} from "@angular/router";
import {routing} from "./sellers.routing";
import {SellerModal} from './seller/seller.component';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgaModule,
    FormsModule,
    RouterModule,
    routing,
    ModalModule.forRoot(),
    NgxPaginationModule
  ],
  declarations: [
      Sellers,
      SellerModal
  ],
  entryComponents:[
      SellerModal
  ]
})
export class SellersModule { }
