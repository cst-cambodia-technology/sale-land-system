import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgUploaderOptions} from "ngx-uploader";
import {Seller} from "../sellers.modal";
import {SellersService} from "../sellers.service";

@Component({
  selector: 'app-seller-module',
  templateUrl: './seller-modal.component.html',
  styleUrls: ['./seller-modal.component.scss'],

})
export class SellerModal implements OnInit {

  public action: string = null;
  public seller: Seller = new Seller();

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public sellers:any = {
    image: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions:NgUploaderOptions = {
    url: '',
  };
  public fileUploaderOptions:NgUploaderOptions = {
    url: '',
  };

  constructor(private activeModal: NgbActiveModal, private sellersService: SellersService) { }

  ngOnInit() {

  }

  close() {
    this.activeModal.close();
  }

  cancel(){
    this.close();
  }
  actionListener(){
    if(this.action == 'store'){
      this.storeSellers(this.seller);
    }else if(this.action == 'update'){
      this.updateSellers(this.seller.id, this.seller);
    }
  }
  storeSellers(seller: Seller){
    this.sellersService.storeSellers(seller)
        .subscribe(
            (response: Seller) => {
              this.activeModal.close();
            },
            (error: Error) => console.log(error)
        );
  }
  updateSellers(id: number, seller: Seller){
    this.sellersService.updateSellers(id, seller)
        .subscribe(
            (response: Seller) => {
              this.activeModal.close();
            },
            (error: Error) => console.log(error)
        );
  }
}
