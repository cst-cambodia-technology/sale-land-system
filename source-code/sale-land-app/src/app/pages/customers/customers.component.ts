import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('customerModal') public customerModal: CustomerComponent
  @Input() customers: Customer[];

  constructor(private customersService: CustomersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.list();
  }

  getNotification(customer: Customer) {
      if(this.customerModal.action == 'store') {
          this.customers.push(customer);
      } else if(this.customerModal.action == 'update') {
        let updateCustomer = this.customers.find(this.findCustomer, customer.id);
        this.customers[this.customers.indexOf(updateCustomer)] = customer;
      }
  }
  list() {
    this.customersService.index()
        .subscribe(
            (response: Customer[]) => this.customers = response,
            (error:  Error) => console.log(error)
        );
  }

  new() {
    this.customerModal.customer = new Customer();
    this.customerModal.action = 'store';
    this.customerModal.open();
  }

  edit(customer: Customer) {
      this.customerModal.customer = Object.assign({}, customer);
      this.customerModal.customer.address = Object.assign({}, customer.address);
      this.customerModal.customer.contact = Object.assign({}, customer.contact);
      this.customerModal.action = 'update';
      this.customerModal.open();
  }

  findCustomer(customer) {
      return customer.id === this;
  }
}
