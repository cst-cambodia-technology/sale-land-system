import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppTranslationModule} from "../../app.translation.module";
import {NgaModule} from "../../theme/nga.module";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {routing} from "./layouts.routing";
import {Layouts} from "./layouts.component";

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    NgbModalModule,
    routing,
  ],
  declarations: [
      Layouts
  ]
})
export class LayoutsModule { }
