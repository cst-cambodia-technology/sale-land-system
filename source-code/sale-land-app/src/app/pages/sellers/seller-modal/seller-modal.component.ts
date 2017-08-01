import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgUploaderOptions} from "ngx-uploader";
import {SellersService} from "../sellers.service";
import {Sellers} from "../sellers.modal";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-seller-module',
  templateUrl: './seller-modal.component.html',
  styleUrls: ['./seller-modal.component.scss'],
  providers: [SellersService],

})
export class SellerModal implements OnInit {

  sellers = new Sellers();
  public uploaderOptions:NgUploaderOptions = {
    url: '',
  };
  modalHeaderSeller: string;
  constructor(
      private activeModal: NgbActiveModal,
      private sellersService: SellersService) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }
  onSubmit(form: NgForm){
    console.log(this.sellers);
    this.sellers.displayName = this.sellers.companyName + this.sellers.jobTitle
    this.sellers.status='Open';
    this.sellersService.addNewSellers(this.sellers)
        .subscribe(
            (response:Response)=>response.json()
        );
    form.reset() ;
    this.activeModal.close();
  }
}
