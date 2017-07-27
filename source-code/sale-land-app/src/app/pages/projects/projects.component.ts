import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProjectModalComponent} from "./project-modal/project-modal.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  projectModalShow(){
      const activeModal = this.modalService.open(ProjectModalComponent, {size: 'lg'});
      activeModal.componentInstance.modalHeader = 'Add new project';
  }
}
