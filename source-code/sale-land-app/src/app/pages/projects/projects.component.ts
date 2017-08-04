import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProjectComponent} from "./project/project.component";
import {ProjectsService} from "./projects.service";
import {Project} from "./project/project";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {

  constructor(private modalService: NgbModal ,private projectsService: ProjectsService ) { }

  @Input() projects: Project[];

  ngOnInit() {
      this.projectsService.getProjects()
          .subscribe(
              (response: Project[]) =>  this.projects = response,
              (error: Response) => console.log(error)
          )
  }

  onEdit(id: number) {
        this.projectsService.getProject(id)
            .subscribe(
                (response :Projects) => {
                    const activeModal = this.modalService.open(ProjectComponent, {size: 'lg'},);
                    activeModal.componentInstance.action = 'update';
                    activeModal.componentInstance.project = response;
                },
                (error: Error) => {console.log(error)}
            );

    }

  projectModalShow(){
      const activeModal = this.modalService.open(ProjectComponent, {size: 'lg'});
      activeModal.componentInstance.action = 'store';
  }
}
