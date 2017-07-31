import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProjectModalComponent} from "./project-modal/project-modal.component";
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
  onEdit() {
      const activeModal = this.modalService.open(ProjectModalComponent, {size: 'lg'});
      activeModal.componentInstance.modalHeader = 'Edit project';
      activeModal.componentInstance.modalAction = 'Update';
    }

  projectModalShow(){
      const activeModal = this.modalService.open(ProjectModalComponent, {size: 'lg'});
      activeModal.componentInstance.modalHeader = 'Add new test';
      activeModal.componentInstance.modalAction = 'Save';
  }
}
