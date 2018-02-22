import { Routes, RouterModule } from '@angular/router';

import { CareTakersListComponent } from './care-takers-list/care-takers-list.component';
import { CareTakersEditComponent } from './care-takers-edit/care-takers-edit.component';


export const careTakersRoutes: Routes = [
    { path: 'list', component: CareTakersListComponent },
    { path: 'new', component: CareTakersEditComponent, data: { type: 'new' }  },
    { path: 'edit', children: [
        { path: ':id', component: CareTakersEditComponent, data: { type: 'edit' } }
    ]}
];

export const careTakersRoutingModule = RouterModule.forChild(careTakersRoutes);
