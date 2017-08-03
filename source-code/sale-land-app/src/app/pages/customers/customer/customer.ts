import {Address} from "../../partials/address";
import {Contact} from "../../partials/contact";
import {Identity} from "../../partials/identity";

export class Customer {
    id: number = null;
    title: string = null;
    givenName: string = null;
    middleName: string = null;
    familyName: string = null;
    suffix: string = null;
    displayName: string;
    companyName: string = null;
    jobTitle: string = null;
    image: string = null;
    gender: string = null;
    birthDate: string = null;
    identity: Identity = new Identity();
    contact: Contact = new Contact();
    address: Address = new Address();
    note: string = null;
    status: string = 'Active';

    constructor() {

    }
}
