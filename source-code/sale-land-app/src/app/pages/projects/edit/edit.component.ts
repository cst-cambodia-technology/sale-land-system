import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ProjectsService} from "../projects.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private  projectsService: ProjectsService) { }
  modalHeader: string;
  modalContent: string;
  ngOnInit() {
  }
  close() {
    this.activeModal.close();
  }

}
