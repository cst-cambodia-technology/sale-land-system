import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from "./projects.component";
import { AppTranslationModule } from "../../app.translation.module";
import { NgaModule } from "../../theme/nga.module";
import { routing } from "./projects.routing";
import { ProjectComponent } from './project/project.component';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap";
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
      CommonModule,
      AppTranslationModule,
      NgaModule,
      FormsModule,
      NgbModalModule,
      routing,
      ModalModule.forRoot(),
      NgxPaginationModule
  ],
  declarations: [
      Projects,
      ProjectComponent,
      FilterPipe,
  ],
  entryComponents: [
      ProjectComponent,
  ],
})
export class ProjectsModule { }
