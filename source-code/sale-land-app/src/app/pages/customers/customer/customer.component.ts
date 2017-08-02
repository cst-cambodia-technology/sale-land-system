import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgUploaderOptions} from "ngx-uploader";
import {Customer} from "./customer";
import {CustomersService} from "../customers.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.html',
  styleUrls: ['./customer.scss'],
})

export class CustomerComponent implements OnInit {


  public action: string = null;

  public customer:Customer =  new Customer();

  public defaultPicture = 'assets/img/theme/no-photo.png';

  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  public fileUploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  constructor(private activeModal: NgbActiveModal, private customersService: CustomersService) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  cancel() {
    this.close();
  }

  actionListener() {
    if(this.action == 'store'){
      this.store(this.customer);
    } else if(this.action == 'update'){
      this.update(this.customer.id, this.customer);
    }
  }

  store(customer: Customer) {
    this.customersService.store(customer)
        .subscribe(
            (response: Customer) => {
              this.activeModal.close();
            },
            (error:  Error) => console.log(error)
        );
  }

  update(id: number, customer: Customer) {
    this.customersService.update(id, customer)
        .subscribe(
            (response: Customer) => {
              this.activeModal.close();
            },
            (error:  Error) => console.log(error)
        );
  }
}
