import {Component, Input, OnInit} from '@angular/core';
import {CustomersService} from "./customers.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CustomerComponent} from "./customer/customer.component";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.html',
  styleUrls: ['./customers.scss']
})
export class Customers implements OnInit {

  @Input() customers: any;


  constructor(private customersService: CustomersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.customersService.getCustomers()
        .subscribe(
            (response: Response) => this.customers = response,
            (error: Error) => console.log(error)
        );
  }

  onNew() {
    this.modalService.open(CustomerComponent, {size: 'lg', backdrop: 'static'});
  }

  onEdit() {

  }
}
