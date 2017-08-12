import {Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import { ProjectsService } from "../projects.service";
import { Project } from "./project";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrls: ['./project.scss']
})
export class ProjectComponent implements OnInit {

  @ViewChild('projectModal') public projectModal: ModalDirective;
  @Output() myEvent: EventEmitter<Project> = new EventEmitter<Project>();

  public action: string = null;
  public project:Project =  new Project();

  constructor(private  projectsService: ProjectsService) { }

  ngOnInit() {
  }

  /*show modal*/
  show(){
    this.projectModal.show();
    this.action = 'store';
    this.projectModal.config={
         backdrop: "static",
         keyboard: false
        };
    }
    /* hide modal*/
  hide(){
     this.projectModal.hide();
     this.project = new Project();
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
                (project: Project) => {
                    this.myEvent.emit(project);
                    this.hide();
                },
                (error: Error) => console.log(error)
            );
  }

  updateProject(id: number, project: Project) {
        this.projectsService.updateProject(id, project)
            .subscribe(
                (project: Project) => {
                    this.myEvent.emit(project);
                    this.hide();
                },
                (error:  Error) => console.log(error)
            );
  }

}
