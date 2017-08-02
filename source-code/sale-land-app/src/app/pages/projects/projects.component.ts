import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProjectComponent} from "./project/project.component";
import {EditComponent} from "./edit/edit.component";
import {ProjectsService} from "./projects.service";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {

  constructor(private modalService: NgbModal ,private projectsService: ProjectsService ) { }

  @Input() projects: Projects[];
  ngOnInit() {
      this.projectsService.getProjects()
          .subscribe(
              (projects: Projects[]) =>  this.projects = projects,
              (error: Response) => console.log(error)
          )
  }
    editing = true;
    editValue = '';
    onEdit() {
      const activeModal = this.modalService.open(EditComponent, {size: 'lg'},);
      activeModal.componentInstance.modalHeader = 'Edit project';
        this.editing = false;
        this.editValue;

    }

  projectModalShow(){
      const activeModal = this.modalService.open(ProjectComponent, {size: 'lg'});
      activeModal.componentInstance.modalHeader = 'Add new test';
  }
}
