import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ProjectsService} from "../projects.service";

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

    modalHeader: string;
    modalContent: string  = 'project content';

  constructor(private activeModal: NgbActiveModal, private  projectsService: ProjectsService) { }

  ngOnInit() {

  }

  save(){
    this.projectsService.storeProject('test','test')
        .subscribe(
            response => console.log(response),
            error => console.log(error)
        );
  }
  close() {
    this.activeModal.close();
  }
}
