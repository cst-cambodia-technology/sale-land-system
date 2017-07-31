import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppTranslationModule} from "../../app.translation.module";
import {NgaModule} from "../../theme/nga.module";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {routing} from "./layouts.routing";
import {Layouts} from "./layouts.component";
import { LayoutModalComponent } from './layout-modal/layout-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutService} from "./layout.sevice";

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    NgbModalModule,
    routing,

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
