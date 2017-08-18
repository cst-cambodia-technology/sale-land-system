import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SellersService} from "./sellers.service";
import {SellerModal} from "./seller/seller.component";
import {Seller} from "./seller/sellers";

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.html',
  styleUrls: ['./sellers.scss']
})

export class Sellers implements OnInit {
   @Input() sellers: Seller[];

   @ViewChild('sellerModal') public sellerModal: SellerModal;

  constructor(private sellersService: SellersService){ }

  ngOnInit() {
    this.getSellers();
  }
  getSellers() {
    this.sellersService.getSellers()
        .subscribe(
            (response: Seller[]) => this.sellers = response,
            (error: Error) => console.log(error)
        );
  }

  /*function invoke from sellerModal component*/
  refreshList(seller){
      if (this.sellerModal.isNew){
          this.sellers.push(seller);
      } else {
          let id = seller.id;
          let updateSeller = this.sellers.find(this.findIndexToUpdate, id);
          let index = this.sellers.indexOf(updateSeller);
          this.sellers[index] = seller;
      }
  }
  /*find id in new seller*/
  findIndexToUpdate(seller){
      return seller.id === this;
  }

  new() {
      this.sellerModal.isNew = true;
      this.sellerModal.show();
  }
  edit(seller: Seller) {
      this.sellerModal.seller = Object.assign({}, seller);
      this.sellerModal.seller.address = Object.assign({}, seller.address);
      this.sellerModal.seller.contact = Object.assign({}, seller.contact);
      this.sellerModal.isNew = false;
      seller.status == "Active" ? this.sellerModal.isActive = true : this.sellerModal.isActive = false;
      this.sellerModal.show();
  }

}


