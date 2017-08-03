///<reference path="layout-modal/layout-modal.component.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LayoutModalComponent} from "./layout-modal/layout-modal.component";
import {Layout} from "./layouts.model";
import {LayoutsService} from "./layouts.sevice";


@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.html',
  styleUrls: ['./layouts.scss'],
})
export class Layouts implements OnInit{



  @Input()layouts : Layout[];
  @Input()layout: Layout;
  // @Input()projects: Projects[];

  constructor(private modalLayout: NgbModal, private layoutService: LayoutsService) {

  }

  ngOnInit() {
    this.getLayoutList();
    // let timer = Observable.timer(2000,1000);
    //
    // timer.subscribe(()=> this.getLayoutList());
  }

  private getLayoutList(): void{
    this.layoutService.getLayouts()
    .subscribe(
    ( layouts: Layout[]) => this.layouts = layouts,
    (error: Response)=> console.log(error)
    );
  }

  layoutModalShow(){
    const activeModalLayout = this.modalLayout.open(LayoutModalComponent, {size: 'lg'});
    activeModalLayout.componentInstance.modalHeader = 'Layout Information';
    activeModalLayout.componentInstance.btnSave = 'Save';
  }

  onEdit(layout: Layout){
    let newCourse= Object.assign({}, layout);
    const activeModalLayout = this.modalLayout.open(LayoutModalComponent, {size: 'lg'});

    activeModalLayout.componentInstance.modalHeader = 'Edit Layout Information ';

    activeModalLayout.componentInstance.showHideBatchCheckBox = false;

    activeModalLayout.componentInstance.btnSave = 'Update';



    activeModalLayout.componentInstance.layout = newCourse;
    activeModalLayout.componentInstance.layout.projectId = newCourse.project.id;
    console.log( newCourse);

  }

}
