///<reference path="layout/layout.component.ts"/>
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {LayoutModalComponent} from "./layout/layout.component";
import {Layout} from "./layout/layouts";
import {LayoutsService} from "./layouts.sevice";




@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.html',
  styleUrls: ['./layouts.scss'],
  providers: [NgbActiveModal]
})
export class Layouts implements OnInit{
  @ViewChild('layoutModal') public layoutModal: LayoutModalComponent
  @Input()layouts : Layout[];
  @Input()layout: Layout;

  constructor(private layoutService: LayoutsService) {

  }
  /*function invoke from layoutModal component to get data */
  refreshList(seller){
    console.log(seller);
    this.getLayoutList();
  }

  ngOnInit() {
    this.getLayoutList();
  }

  /* get all layout data */
  private getLayoutList(): void{
    this.layoutService.getLayouts()
      .subscribe(( layouts: Layout[]) => this.layouts = layouts,
          (error: Response)=> console.log(error)
      );
  }

  /* click new layout */
  onNewLayout(){
    this.layoutModal.show();


    this.layoutModal.showHideBatchCheckBox = true;
    console.log(this.layoutModal.showHideBatchCheckBox);
  }

  /*click edit*/
  onEdit(layout: Layout){
    let newLayout = Object.assign({}, layout);
    this.layoutModal.show();
    this.layoutModal.btnSave = "Update";
    this.layoutModal.showHideBatchCheckBox = false;
    this.layoutModal.layout = newLayout;
    this.layoutModal.layout.projectId = newLayout.project.id;
  }
}
