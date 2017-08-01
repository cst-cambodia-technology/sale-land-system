import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LayoutModalComponent} from "./layout-modal/layout-modal.component";
import {LayoutService} from "./layouts.sevice";
import {Layout} from "./layouts.model";

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.html',
  styleUrls: ['./layouts.scss']
})
export class Layouts implements OnInit {

  @Input() layouts = new Layout();

  constructor( private modalLayout: NgbModal, private layoutService: LayoutService) {
  }

  ngOnInit() {
    this.layoutService.getLayouts()
        .subscribe(
            ( layouts = new Layout()) => this.layouts = layouts,
            (error: Response)=> console.log(error)
        );

  }

  layoutModalShow(){
    const activeModalLayout = this.modalLayout.open(LayoutModalComponent, {size: 'lg'});
    activeModalLayout.componentInstance.modalHeader = 'Add new layout';
  }

}
