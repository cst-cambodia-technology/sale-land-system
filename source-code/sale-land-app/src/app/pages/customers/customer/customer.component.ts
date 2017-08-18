import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgUploaderOptions} from "ngx-uploader";
import {Customer} from "./customer";
import {CustomersService} from "../customers.service";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.html',
  styleUrls: ['./customer.scss'],
})
export class CustomerComponent implements OnInit {
  @ViewChild('customerModal') public customerModal: ModalDirective;
  @Input() customer:Customer =  new Customer();
  @Output() notifyCustomers: EventEmitter<Customer> = new EventEmitter<Customer>();

  public isNew: boolean;

  public isActive: boolean;

  public defaultPicture = 'assets/img/theme/no-photo.png';

  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  public fileUploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
  }

  open() {
      this.customerModal.show();
      this.customerModal.config = { backdrop: "static", keyboard: false };
  }

  close() {
    this.customerModal.hide();
  }

  cancel() {
    this.close();
  }

  actionListener() {
    if(this.isNew){
      this.store(this.customer);
    } else {
      this.update(this.customer.id, this.customer);
    }
  }
  actionStatus() {
    if(this.isActive) {
    this.customer.status = 'Inactive';
    this.update(this.customer.id, this.customer);
    } else {
    this.customer.status = 'Active';
    this.update(this.customer.id, this.customer);
    }
  }
  store(customer: Customer) {
    this.customersService.store(customer)
        .subscribe(
            (response: Customer) => {
                this.customerModal.ngOnDestroy();
                this.notifyCustomers.emit(response);
            },
            (error:  Error) => console.log(error)
        );
  }

  update(id: number, customer: Customer) {
    this.customersService.update(id, customer)
        .subscribe(
            (response: Customer) => {
                this.customerModal.ngOnDestroy();
                this.notifyCustomers.emit(response);
            },
            (error:  Error) => console.log(error)
        );
  }
}
