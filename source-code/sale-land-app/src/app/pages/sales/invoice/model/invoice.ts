import {LayoutList} from "./layoutList";
/**
 * Created by Sokhon Pang on 8/17/2017.
 */
export class Invoice{

    customerId: number;
    no: string;
    date: string;
    memo: string;
    subTotal: number;
    discountMethod: string;
    discount: number;
    discountValue:number;
    grandTotal: number;
    deposit: number;
    balance:number;
    status: string;
    invoiceDetails: LayoutList[];
}

