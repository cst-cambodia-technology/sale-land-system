import {Component, OnInit} from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProjectsService } from "../projects.service";
import { Project } from "./project";

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrls: ['./project.scss']
})
export class ProjectComponent implements OnInit {

    public action: string = null;

    public project:Project =  new Project();

  constructor(private activeModal: NgbActiveModal, private  projectsService: ProjectsService) { }

  ngOnInit() {

  }

  actionListener() {
        if(this.action == 'store'){
            this.storeProject(this.project);
        } else if(this.action == 'update'){
            this.updateProject(this.project.id, this.project);
        }
  }

  storeProject(project: Project) {
        this.projectsService.storeProject(project)
            .subscribe(
                (response: Project) => {
                    this.activeModal.close();
                },
                (error:  Error) => console.log(error)
            );

  }

  updateProject(id: number, project: Project) {
        this.projectsService.updateProject(id, project)
            .subscribe(
                (response: Project) => {
                    this.activeModal.close();
                },
                (error:  Error) => console.log(error)
            );
  }

  close() {
    this.activeModal.close();
  }
}
