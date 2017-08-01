import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {Customers} from "./customers.component";

export const routes: Routes = [
    {
        path: '',
        component: Customers

    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
