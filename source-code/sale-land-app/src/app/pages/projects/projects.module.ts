import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from "./projects.component";
import { AppTranslationModule } from "../../app.translation.module";
import { NgaModule } from "../../theme/nga.module";
import { routing } from "./projects.routing";
import { ProjectComponent } from './project/project.component';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

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
      ProjectComponent,
      EditComponent
  ],
  entryComponents: [
      ProjectComponent,
      EditComponent
  ],
})
export class ProjectsModule { }
