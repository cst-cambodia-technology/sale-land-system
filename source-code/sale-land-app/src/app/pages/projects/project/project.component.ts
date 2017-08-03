import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProjectsService } from "../projects.service";
import {Project} from "../edit/edit";

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

    onSubmit(form: NgForm) {
    this.projectsService.storeProject(form.value.name, form.value.description)
        .subscribe(
            () => console.log(this)
        );
     form.reset();
     this.activeModal.close();
  }
  close() {
    this.activeModal.close();
  }
}
