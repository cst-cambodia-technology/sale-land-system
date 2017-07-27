import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import {Projects} from "./projects.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: Projects
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
