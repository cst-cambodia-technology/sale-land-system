import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProjectsService } from "../projects.service";

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

    modalHeader: string;
    modalContent: string;
    modalAction: string;
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