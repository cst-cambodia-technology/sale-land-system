import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LayoutModalComponent} from "./layout-modal/layout-modal.component";

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.html',
  styleUrls: ['./layouts.scss']
})
export class Layouts implements OnInit {

  public isBatch:boolean = false;

  constructor( private modalLayout: NgbModal) { }

  ngOnInit() {

  }

  layoutModalShow(){
    const activeModalLayout = this.modalLayout.open(LayoutModalComponent, {size: 'lg'});
    activeModalLayout.componentInstance.modalHeader = 'Add new layout';
  }


}
