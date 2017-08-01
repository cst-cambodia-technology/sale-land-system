import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {Sellers} from "./sellers.component";


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: Sellers
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
