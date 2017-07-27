import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Myprofile} from "./myprofile.component";
import {routing} from "./myprofile.routing";
import {NgaModule} from "../../theme/nga.module";
import {AppTranslationModule} from "../../app.translation.module";

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
      Myprofile
  ]
})
export class MyprofileModule { }
