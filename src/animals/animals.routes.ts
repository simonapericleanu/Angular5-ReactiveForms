import { Routes, RouterModule } from '@angular/router';

import { AnimalsDomesticComponent } from './animals-domestic/animals-domestic.component';
import { AnimalsWildComponent } from './animals-wild/animals-wild.component';


export const animalRoutes: Routes = [
    {
        path: '',
        component: AnimalsDomesticComponent,
        children: [
            { path: '', redirectTo: 'domestic', pathMatch: 'full' },
            { path: 'domestic', component: AnimalsDomesticComponent },
            { path: 'wild', component: AnimalsWildComponent }
        ]
    }
];

export const animalsRoutingModule = RouterModule.forChild(animalRoutes);
