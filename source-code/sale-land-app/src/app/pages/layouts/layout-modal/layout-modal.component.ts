import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {LayoutService} from "../layout.sevice";
import {Layout} from "../layout.model";

@Component({
  selector: 'app-layout-modal',
  templateUrl: './layout-modal.component.html',
  styleUrls: ['./layout-modal.component.scss'],
  providers: [LayoutService],
})
export class LayoutModalComponent implements OnInit {
  layout = new Layout();

  modalHeader: string;
  constructor( private activeModal: NgbActiveModal, private layoutService: LayoutService) { }

  ngOnInit() {
  }

  public close(){
    this.activeModal.close();
  }

  onSubmit(form: NgForm){
    console.log(this.layout);
    this.layout.label= this.layout.prefix+ this.layout.no;
    this.layout.status= 'Open';
    this.layoutService.addNewLayout(this.layout)
        .subscribe(
            // data => console.log('success: ', data),
            // err => console.log('error: ', err)
            (response: Response) => response.json()
        );
    form.reset() ;
    this.activeModal.close();
  }
}
