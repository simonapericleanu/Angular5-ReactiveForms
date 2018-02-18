import { Routes, RouterModule } from '@angular/router';

import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsEditComponent } from './animals-edit/animals-edit.component';


export const animalRoutes: Routes = [
    { path: 'list', component: AnimalsListComponent },
    { path: 'new', component: AnimalsEditComponent, data: { type: 'new' }  },
    { path: 'edit', children: [
        { path: ':id', component: AnimalsEditComponent, data: { type: 'edit' } }
    ]}
];

export const animalsRoutingModule = RouterModule.forChild(animalRoutes);
