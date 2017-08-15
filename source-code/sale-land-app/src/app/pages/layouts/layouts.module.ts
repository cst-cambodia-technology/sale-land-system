import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppTranslationModule} from "../../app.translation.module";
import {NgaModule} from "../../theme/nga.module";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {routing} from "./layouts.routing";
import {Layouts} from "./layouts.component";
import { LayoutModalComponent } from './layout/layout.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    NgbModalModule,
    FormsModule,
    routing,
    ModalModule.forRoot(),
    NgxPaginationModule,

  ],
  declarations: [
      Layouts,
      LayoutModalComponent,
  ],
  entryComponents: [
      LayoutModalComponent
  ],
})
export class LayoutsModule { }
