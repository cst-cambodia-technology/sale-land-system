export class ApiResource {
    public static API_ROOT: string      =   'http://localhost:8000/api/';

    public static AUTHENTICATE: string  =   ApiResource.API_ROOT + 'authenticate/';
    public static PROJECTS: string      =   ApiResource.API_ROOT + 'projects/';
    public static LAYOUTS: string       =   ApiResource.API_ROOT + 'layouts/';
    public static CUSTOMERS: string     =   ApiResource.API_ROOT + 'customers/';
    public static SELLERS: string       =   ApiResource.API_ROOT + 'sellers/';
    public static USERS: string         =   ApiResource.API_ROOT + 'users';
    public static INVOICES: string      =   ApiResource.API_ROOT + 'invoices';

}
