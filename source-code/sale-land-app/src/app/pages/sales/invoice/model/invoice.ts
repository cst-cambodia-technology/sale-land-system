import {LayoutList} from "./layoutList";
/**
 * Created by Sokhon Pang on 8/17/2017.
 */
export class Invoice{

    customerId: number;
    no: string;
    date: Date;
    memo: string;
    subTotal: number;
    discountMethod: string;
    discount: number;
    discountValue:number;
    grandTotal: number;
    deposit: number;
    balance:number;
    status: number;
    invoiceDetails = new LayoutList();
}

