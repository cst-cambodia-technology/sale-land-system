import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SellersService} from "./sellers.service";
import {SellerModal} from "./seller-modal/seller-modal.component";
import {Seller} from "./sellers.modal";

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.html',
  styleUrls: ['./sellers.component.scss']
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
            (seller: Seller[]) => this.sellers = seller,
            (error: Error) => console.log(error)
        );
  }

  new() {
    const activeModal = this.modalSeller.open(SellerModal, {size: 'lg', backdrop: 'static'});
    activeModal.componentInstance.action = 'store';
  }

  edit(id: number) {
    this.sellersService.show(id)
        .subscribe(
            (response: Seller) => {
              const activeModal = this.modalSeller.open(SellerModal, {size: 'lg', backdrop: 'static'});
              activeModal.componentInstance.action = 'update';
              activeModal.componentInstance.seller = response;
            },
            (error:  Error) => {console.log(error)}
        );

  }
}
