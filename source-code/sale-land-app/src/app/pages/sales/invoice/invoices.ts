import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../customers/customer/customer";
import {CustomersService} from "../../customers/customers.service";
import {LayoutsService} from "../../layouts/layouts.sevice";
import {Layout} from "../../layouts/layout/layouts";
import {LayoutList} from "./model/layoutList";
import {InvoiceService} from "./invoice.service";
import {Invoice} from "./model/invoice";
import {DateFormatter} from "ngx-bootstrap";


@Component({
  selector: 'app-invoice',
  templateUrl: './invoices.html',
  styleUrls: ['./invoices.scss']
})
export class Invoices implements OnInit {
  @Input() no: string;
  @Input() memo: string;
  @Input() customerId: number;
  @Input() date: any;
  @Input() customers: Customer[];
  @Input() layouts: Layout[];
  @Input() layoutList =  new LayoutList();
  @Input() layoutLists = [];
  // @Input() customer = new Customer();



  @Input() subTotal: number = 0;
  @Input() discountMethod: string;
  @Input() discount: number = null;
  @Input() discountValue: number = 0;
  @Input() grandTotal: number = 0;
  @Input() deposit: number;
  @Input() balance: number = 0;

  @Input() placeholderDiscount: string;


  constructor(private customerService: CustomersService,
              private layoutService: LayoutsService,
              private invoiceService: InvoiceService) { }

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
  onChangeLayout(id: number){
    for(let i=0; i<this.layouts.length;i++){
      if(id == this.layouts[i].id){

        this.layoutList.layoutId    = this.layouts[i].id;
        this.layoutList.layout       = this.layouts[i].label;
        this.layoutList.size        = this.layouts[i].size;
        this.layoutList.price       = this.layouts[i].price;
        this.layoutList.description = this.layouts[i].description;

        return;
      }
    }
  }

  onChangeDiscountMethod(discountMethod){
    if(discountMethod != 'Percent'){
      this.placeholderDiscount = '$';
    }else {
      this.placeholderDiscount = '%';
    }

  }

  onChangeDiscount(discount){
    this.discount = discount;
    if(this.discountMethod == 'Percent'){
      if(discount.toString() == ''){
        this.discountValue = 0;
      }else {
        let dis ;
        dis = (this.discount/100)*this.subTotal;
        this.discountValue = dis;
      }
    }
    if(this.discountMethod == 'Value'){
      if(discount.toString() == ''){
        this.discountValue = 0;
      }else {
        this.discountValue = this.discount;
      }
    }

    if(this.deposit != null){
      let balance;
      balance = this.getGrandTotal() - this.deposit;
      this.balance = balance;
    }else {
      this.balance = this.grandTotal;
    }
  }

  onChangeDeposit(deposit){
      let balance ;
      balance = this.getGrandTotal() - deposit;
      this.balance = balance;
      this.deposit = deposit;
  }

  /*click add layout*/
  onClickAdd(){
    this.layoutLists.push(this.layoutList);

    for(let i=0 ; i<this.layouts.length;i++){
      if(this.layoutList.layoutId == this.layouts[i].id){
        this.layouts.splice(i, 1);
        break;
      }
    }
    /*reset layout form*/
    this.layoutList = new LayoutList();
  }

  /*sum price in list layout*/
  getSubTotal(): number{
    let subTotal = 0;
    for (let layoutList of this.layoutLists){
      if(layoutList.price){
        subTotal += parseFloat(layoutList.price);

        this.subTotal = subTotal;
      }
    }
    return subTotal;
  }

  getGrandTotal(): number{
    let grandTotal = 0;
    if(this.discount != null){
      grandTotal = this.getSubTotal() - this.discountValue;

      this.grandTotal = grandTotal;
    }else {
      grandTotal = this.getSubTotal();
      this.grandTotal = grandTotal;
    }
    return grandTotal;
  }

  getBalance(): number{
    let balance = 0;

    if(this.deposit == null){
      balance = this.grandTotal;
      this.balance = balance;
    }else {
      balance = this.grandTotal - this.deposit;
    }

    return balance;
  }

  /*click button clear in list sale*/
  onClickClear(id : number){
    let layout = new Layout();

    this.discount = null;
    this.deposit = null;
    this.discountValue = 0;

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

  actionSave(event): void{
    let invoice = new Invoice();
    invoice.customerId = this.customerId;
    invoice.no = this.no.toString();
    invoice.date = new DateFormatter().format(this.date, 'YYYY-MM-DD');
    invoice.memo = this.memo;
    invoice.subTotal = this.subTotal;
    invoice.discountMethod = this.discountMethod;
    invoice.discount = this.discount;
    invoice.discountValue = this.discountValue;
    invoice.grandTotal = this.grandTotal;
    invoice.deposit = this.deposit;
    invoice.balance =this.balance;
    invoice.status = 'Open';
    invoice.invoiceDetails = this.layoutLists;

    this.invoiceService.store(invoice)
        .subscribe(
            (invoice: Invoice ) => {
              this.resetInvoice();
            },
            (error: Response)=> console.log(error)
        );

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
    this.invoiceService.getInvoiceNo()
      .subscribe(
          (no: string)=> this.no = no,
          (error:  Error) => console.log(error)
      );
  }
  private resetInvoice(): void{
    this.layoutLists = [];
    this.customerId = null;
    this.getInvoiceNo();
    this.getLayouts();
    this.memo = '';
    this.layoutList = new LayoutList();
    this.subTotal = 0;
    this.discountMethod = null;
    this.discount = null;
    this.discountValue = 0;
    this.grandTotal = 0;
    this.deposit = null;
    this.balance = 0;
  }
}
