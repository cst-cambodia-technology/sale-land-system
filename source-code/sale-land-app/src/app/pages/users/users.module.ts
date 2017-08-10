import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from './users.routing';
import {Users} from "./users.component";
import {AppTranslationModule} from "../../app.translation.module";
import {NgaModule} from "../../theme/nga.module";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {UserStoreComponent} from "app/pages/users/store/user.store.component";

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    NgbModalModule,
    FormsModule,
    routing
  ],
  declarations: [
    Users,
    UserStoreComponent,
  ],
  entryComponents: [
    UserStoreComponent
  ],
})
export class UsersModule { }
