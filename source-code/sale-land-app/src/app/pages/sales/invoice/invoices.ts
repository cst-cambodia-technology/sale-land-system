import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../customers/customer/customer";
import {CustomersService} from "../../customers/customers.service";
import {LayoutsService} from "../../layouts/layouts.sevice";
import {Layout} from "../../layouts/layout/layouts";
import {LayoutList} from "./model/layoutList";
import {InvoiceService} from "./invoice.service";
import {DatePipe} from "@angular/common";
import {DateFormatter} from "ngx-bootstrap";


@Component({
  selector: 'app-invoice',
  templateUrl: './invoices.html',
  styleUrls: ['./invoices.scss']
})
export class Invoices implements OnInit {
  @Input() no: string;
  @Input() date: any;
  @Input() customers: Customer[];
  @Input() layouts: Layout[];
  @Input() layoutList =  new LayoutList();
  @Input() layoutLists = [];
  @Input() customer = new Customer();



  @Input() subTotal: number = 0;
  @Input() discountMethod: string;
  @Input() discount: number = 0;
  @Input() discountValue: number = 0;
  @Input() grandTotal: number = 0;
  @Input() deposit: number = 0;
  @Input() balance: number = 0;


  constructor(private customerService: CustomersService,
              private layoutService: LayoutsService,
              private invoiceSerive: InvoiceService) { }

  ngOnInit() {
    // this.date = this.datePipe.transform(new Date(), 'MM/dd/yyyy');
    this.date = new Date();
    this.getInvoiceNo();
    this.getCustomers();
    this.getLayouts();
  }

  /*set invoice date*/
  set humanDate(e){
    e = e.split('-');
    let d = new Date(Date.UTC(e[0], e[1]-1, e[2]));
    this.date.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1);
  }

  /*get invoice date*/
  get humanDate(){
    return this.date.toISOString().substring(0, 10);
  }

  /*change layout*/
  onChange(id: number){
    for(let i=0; i<this.layouts.length;i++){
      if(id == this.layouts[i].id){

        this.layoutList.layoutId    = this.layouts[i].id;
        this.layoutList.label       = this.layouts[i].label;
        this.layoutList.size        = this.layouts[i].size;
        this.layoutList.price       = this.layouts[i].price;
        this.layoutList.description = this.layouts[i].description;

        return;
      }
    }
  }

  /*click add layout*/
  onClickAdd(){
    let subTotal;

    console.log(new DateFormatter().format(this.date, 'MM/DD/YYYY'));
    this.layoutLists.push(this.layoutList);

    for(let i=0 ; i<this.layouts.length;i++){
      if(this.layoutList.layoutId == this.layouts[i].id){
        this.layouts.splice(i, 1);
        break;
      }
    }



    // subTotal = this.layoutList.price;
    // this.subTotal = this.subTotal + subTotal;
    //
    // this.grandTotal = this.subTotal - this.discount;


    /*reset layout form*/
    this.layoutList = new LayoutList();
  }

  /*sum price in list layout*/
  getSubTotal(): number{
    let subTotal = 0;
    for (let layoutList of this.layoutLists){
      if(layoutList.price){
        subTotal += parseInt(layoutList.price);

        this.subTotal = subTotal;
      }
    }
    return subTotal;
  }

  getGrandTotal(): number{
    let grandTotal = 0;
    if(this.getSubTotal()){
      grandTotal = this.getSubTotal() - this.discount;

      this.grandTotal = grandTotal;
    }
    return grandTotal;
  }

  /*click button clear in list sale*/
  onClickClear(id : number){
    let layout = new Layout();

    for(let i=0; i<this.layoutLists.length; i++){
      if(id == this.layoutLists[i].layoutId){

        layout.id          = this.layoutLists[i].layoutId;
        layout.label       = this.layoutLists[i].label;
        layout.size        = this.layoutLists[i].size;
        layout.price       = this.layoutLists[i].price;
        layout.description = this.layoutLists[i].description;

        /*push layout to layouts*/
        this.layouts.push(layout);

        /*sort layouts object*/
        this.layouts.sort((l1, l2) => {
          if (l1.id > l2.id) {
            return 1;
          }
          if (l1.id < l2.id) {
            return -1;
          }
          return 0;
        });

        /*remove layoutList[i]*/
        this.layoutLists.splice(i, 1);
        return;
      }
    }
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

  private getInvoiceNo(){
    this.invoiceSerive.getInvoiceNo()
      .subscribe(
          (no: string)=> this.no = no,
          (error:  Error) => console.log(error)
      );
  }
}
