import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {Layouts} from "./layouts.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: Layouts

    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
