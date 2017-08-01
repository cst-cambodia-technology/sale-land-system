import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SellerModal} from "./seller-modal/seller-modal.component";


@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.html',
  styleUrls: ['./sellers.component.scss']
})

export class Sellers implements OnInit {
  constructor( private modalSeller: NgbModal) { }

  ngOnInit() {

  }
 sellerModalShow(){
   const activeModal = this.modalSeller.open(SellerModal, {size: 'lg'});
   activeModal.componentInstance.modalHeaderSeller = 'Add new Seller';
 }
}
