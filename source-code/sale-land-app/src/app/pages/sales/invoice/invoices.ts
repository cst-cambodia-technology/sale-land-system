import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../customers/customer/customer";
import {CustomersService} from "../../customers/customers.service";
import {LayoutsService} from "../../layouts/layouts.sevice";
import {Layout} from "../../layouts/layout/layouts";
import {LayoutList} from "./model/LayoutList";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoices.html',
  styleUrls: ['./invoices.scss']
})
export class Invoices implements OnInit {
  @Input() customers: Customer[];
  @Input() layouts: Layout[];
  @Input() layoutList =  new LayoutList();
  @Input() layoutLists = [];
  @Input() customer = new Customer();

  constructor(private customerService: CustomersService, private layoutService: LayoutsService) { }

  ngOnInit() {

    this.getCustomers();
    this.getLayouts();
  }

  onChange(id: number){
      console.log(id);
      for(let i=0; i<this.layouts.length;i++){
        if(id == this.layouts[i].id){
          let layoutFind = this.layouts[i];
  
          this.layoutList.layoutId    = layoutFind.id;
          this.layoutList.label       = layoutFind.label;
          this.layoutList.size        = layoutFind.size;
          this.layoutList.price       = layoutFind.price;
          this.layoutList.description = layoutFind.description;
          
          console.log(this.layoutList);
          return;
        }
      }
  }

  onClickAdd(){
    console.log(this.layoutList);
    this.layoutLists.push(this.layoutList);
    this.layoutList = new LayoutList();

  }


  private getCustomers(){
    this.customerService.index()
        .subscribe(
            (customers: Customer[]) => this.customers = customers,
            (error:  Error) => console.log(error)
        );
  }
  private getLayouts(){
    this.layoutService.getLayouts()
        .subscribe(
            (layouts: Layout[]) => this.layouts = layouts,
            (error: Error) => console.log(error)
        );
  }
}
