import {Component, Input, OnInit} from '@angular/core';
import {CustomersService} from "./customers.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CustomerComponent} from "./customer/customer.component";
import {Customer} from "./customer/customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.html',
  styleUrls: ['./customers.scss'],
})

export class Customers implements OnInit {

  @Input() customers: Customer[];

  constructor(private customersService: CustomersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.customersService.index()
        .subscribe(
            (response: Customer[]) => this.customers = response,
            (error:  Error) => console.log(error)
        );
  }

  new() {
    const activeModal = this.modalService.open(CustomerComponent, {size: 'lg', backdrop: 'static'});
    activeModal.componentInstance.action = 'store';
  }

  edit(customer: Customer) {

    const activeModal = this.modalService.open(CustomerComponent, {size: 'lg', backdrop: 'static'});
    activeModal.componentInstance.action = 'update';
    activeModal.componentInstance.customer = customer;
  }
}
