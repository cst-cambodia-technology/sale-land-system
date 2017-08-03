import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ProjectsService} from "../projects.service";
import {Projects} from "../projects.interface";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
      private activeModal: NgbActiveModal,
      private  projectsService: ProjectsService,
  ) { }
  @Input() projects: Projects;
  modalHeader: string;
  modalContent: string;

  id;
  name;
  description;

  ngOnInit() {
    this.id = ['id'];
     this.projectsService.getProject(this.id).subscribe(
      listing =>{console.log(listing)}
    )
  }
  close() {
    this.activeModal.close();
  }

}
