import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from "./projects.component";
import { AppTranslationModule } from "../../app.translation.module";
import { NgaModule } from "../../theme/nga.module";
import { routing } from "./projects.routing";
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      AppTranslationModule,
      NgaModule,
      FormsModule,
      NgbModalModule,
      routing,
  ],
  declarations: [
      Projects,
      ProjectModalComponent
  ],
  entryComponents: [
    ProjectModalComponent
  ],
})
export class ProjectsModule { }