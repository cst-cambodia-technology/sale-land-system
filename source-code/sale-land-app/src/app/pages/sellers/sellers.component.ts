import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SellersService} from "./sellers.service";
import {SellerModal} from "./seller-modal/seller-modal.component";

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.html',
  styleUrls: ['./sellers.component.scss']
})

export class Sellers implements OnInit {
  @Input() sellers: any;
  constructor( private modalSeller: NgbModal, private sellersService: SellersService) { }

  ngOnInit() {
  this.list();
  }
  list() {
    this.sellersService.getSellers()
        .subscribe(
            (response: Response) => this.sellers = response,
            (error: Error) => console.log(error)
        );
  }

  onNew() {
    this.modalSeller.open(SellerModal, {size: 'lg', backdrop: 'static'});
  }

  onEdit() {}

}
