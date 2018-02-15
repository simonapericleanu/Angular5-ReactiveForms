import { Routes } from '@angular/router';

import { DomesticComponent } from './domestic/domestic.component';
import { WildComponent } from './wild/wild.component';


export const animalRoutes: Routes = [

    { path: '', redirectTo: 'domestic', pathMatch: 'full' },
    { path: 'domestic', component: DomesticComponent },
    { path: 'wild', component: WildComponent },
];
