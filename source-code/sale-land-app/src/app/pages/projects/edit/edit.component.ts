import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ProjectsService} from "../projects.service";
import {Projects} from "../projects.interface";
import {Project} from "./edit";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public project:Project =  new Project();

  constructor(
      private activeModal: NgbActiveModal,
      private  projectsService: ProjectsService,
  ) { }

  @Input() projects: Projects;

  modalHeader: string;
  modalContent: string;


  ngOnInit() {}

  onUpdate(id: number, project: Project) {
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
