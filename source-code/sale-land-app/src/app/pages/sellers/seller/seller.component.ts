import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgUploaderOptions} from "ngx-uploader";
import {Seller} from "./sellers";
import {SellersService} from "../sellers.service";
import {AppSetting} from "../../../app.setting";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-seller-module',
  templateUrl: './seller.html',
  styleUrls: ['./seller.scss'],

})
export class SellerModal implements OnInit {

  @ViewChild('sellerModal') public sellerModal: ModalDirective;
  @Output() myEvent: EventEmitter<Seller> = new EventEmitter<Seller>();

  public action: string =null;

  public seller: Seller = new Seller();

  public defaultPicture = 'assets/img/theme/no-photo.png';

  public uploaderOptions:NgUploaderOptions = {
    url: '',
  };
  public fileUploaderOptions:NgUploaderOptions = {
    url: '',
  };

  constructor(private sellersService: SellersService) { }

  ngOnInit() {

  }

  /*show modal*/
  show(){
    this.sellerModal.show();
    this.action = 'store';
    this.sellerModal.config={
      backdrop: "static",
      keyboard: false
    };
  }
  /* hide modal*/
  hide(){
    this.sellerModal.hide();
    this.resetForm();
  }
  /*click save */
  actionListener(){
    if(this.action == 'store'){
      this.storeSellers(this.seller);
    }else if(this.action == 'update'){
      this.updateSellers(this.seller.id, this.seller);
    }
  }
  /*function store seller*/
  storeSellers(seller: Seller){
    this.sellersService.storeSellers(seller)
        .subscribe(
            (seller: Seller) => {
              this.myEvent.emit(seller);
              this.hide();
            },
            (error: Error) => console.log(error)
        );
  }
  /*function update seller*/
  updateSellers(id: number, seller: Seller){
    this.sellersService.updateSellers(id, seller)
        .subscribe(
            (seller: Seller) => {
              this.myEvent.emit(seller);
              this.hide();

              window.location.href = AppSetting.DOMAIN_NAME + '#/pages/sellers';
            },
            (error: Error) => console.log(error)
        );
  }

  /*reset form seller*/
  public resetForm(){
    this.seller  = new Seller();
  }
}
