import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {LayoutsService} from "../layouts.sevice";
import {Layout} from "../layouts.model";
import {Response} from "@angular/http";
import {Layouts} from "../layouts.component";
import {LayoutInterface} from "../layouts.interface";



@Component({
  selector: 'app-layout-modal',
  templateUrl: './layout-modal.component.html',
  styleUrls: ['./layout-modal.component.scss'],
  providers: [LayoutsService],
})
export class LayoutModalComponent implements OnInit {
   layout =  new Layout();

  // layouts: Layouts;

  public modalHeader: string;
  public showHideBatchCheckBox: boolean = true;
  public btnSave:string = 'Save';
  public id: number;

  public isBatch:boolean = false;



  constructor( private activeModal: NgbActiveModal, private layoutService: LayoutsService) { }


  ngOnInit() {

  }

  public close(){
    this.activeModal.close();
  }

  onSubmit(form: NgForm){
    // console.log(this.layout);
    this.layout.label= this.layout.prefix+ this.layout.no;

    if(this.btnSave =='Save'){

      this.layout.status= 'Open';

      if(this.isBatch!=true){

        let layouts = new Array();
        layouts.push(this.layout);
        this.layoutService.addNewLayout(layouts)
            .subscribe(
                (response: Response) => {
                  response.json();

                }
            );

        form.reset() ;
        this.activeModal.close();
      }else {
        if(this.layout.no > this.layout.to){
          alert('To must be more then no.');
        }else{
          var row = this.layout.to-this.layout.no;
          let layouts = new Array();

          for(var i=0; i<row;i++){
            layouts.push(this.layout);
          }

          this.layoutService.addNewLayout(layouts)
              .subscribe(
                  (response: Response) => response.json()
              );

          form.reset() ;
          this.activeModal.close();


        }
      }
    }else {

    }

  }

}
