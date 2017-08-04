import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SellersService} from "./sellers.service";
import {SellerModal} from "./seller/seller.component";
import {Seller} from "./seller/sellers";
import {error} from "util";

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.html',
  styleUrls: ['./sellers.scss']
})

export class Sellers implements OnInit {

  @Input() sellers: Seller[];

  constructor( private modalSeller: NgbModal, private sellersService: SellersService){ }

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

  new() {
    const activeModal = this.modalSeller.open(SellerModal, {size: 'lg', backdrop: 'static'});
    activeModal.componentInstance.action = 'store';
  }

  edit(id: number) {
      // let newSeller= Object.assign({}, seller);
      // const activeModal = this.modalSeller.open(SellerModal, {size: 'lg', backdrop: 'static'});
      // activeModal.componentInstance.action = 'update';
      // activeModal.componentInstance.seller = newSeller;
    this.sellersService.show(id)
        .subscribe(
            (response: Seller) => {
                const activeModal = this.modalSeller.open(SellerModal, {size: 'lg', backdrop: 'static'});
                activeModal.componentInstance.action = 'update';
                activeModal.componentInstance.seller = response;
            },
            (error: Error) => {console.log(error)}
        );

  }
}
