import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import {Myprofile} from "./myprofile.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: Myprofile
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
