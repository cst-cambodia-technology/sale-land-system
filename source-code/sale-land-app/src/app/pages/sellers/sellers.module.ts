import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Sellers} from "./sellers.component";
import {NgaModule} from "../../theme/nga.module";
import {AppTranslationModule} from "../../app.translation.module";
import {RouterModule} from "@angular/router";
import {routing} from "./sellers.routing";
import {SellerModal} from './seller-modal/seller-modal.component';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [
    CommonModule,
      NgaModule,
      AppTranslationModule,
      NgbModalModule,
      RouterModule,
      routing
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
