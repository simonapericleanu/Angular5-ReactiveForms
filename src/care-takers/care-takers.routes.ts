import { Routes } from '@angular/router';

import { CareTakersDomesticComponent } from './care-takers-domestic/care-takers-domestic.component';
import { CareTakersWildComponent } from './care-takers-wild/care-takers-wild.component';


export const animalRoutes: Routes = [

    { path: '', redirectTo: 'domestic', pathMatch: 'full' },
    { path: 'domestic', component: CareTakersDomesticComponent },
    { path: 'wild', component: CareTakersWildComponent },
];
