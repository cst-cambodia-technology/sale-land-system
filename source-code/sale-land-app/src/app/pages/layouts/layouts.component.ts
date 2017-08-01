import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LayoutModalComponent} from "./layout-modal/layout-modal.component";
import {Layout} from "./layouts.model";
import {LayoutsService} from "./layouts.sevice";

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.html',
  styleUrls: ['./layouts.scss']
})
export class Layouts implements OnInit{

  layouts : Layout[];
  layout: Layout;

  editId: number;

  constructor( private modalLayout: NgbModal, private layoutService: LayoutsService) {
  }

  ngOnInit() {
    this.layoutService.getLayouts()
        .subscribe(
            ( layouts: Layout[]) => this.layouts = layouts,
            (error: Response)=> console.log(error)
        );

  }

  layoutModalShow(){
    const activeModalLayout = this.modalLayout.open(LayoutModalComponent, {size: 'lg'});
    activeModalLayout.componentInstance.modalHeader = 'Add new layout';
  }

  onEdit(layout: Layout){
    const activeModalLayout = this.modalLayout.open(LayoutModalComponent, {size: 'lg'});
    activeModalLayout.componentInstance.modalHeader = 'Edit layout';

    activeModalLayout.componentInstance.showHideBatchCheckBox = false;

    activeModalLayout.componentInstance.btnSave = 'Update';

    console.log(layout);



    // this.editId = id;
    //
    // this.layoutService.getLayout(this.editId)
    //     .subscribe(
    //         (layout:Layout) =>{
    //           this.layout = layout;
    //         },
    //         (error: Response)=> console.log(error)
    //     );
  }

}
