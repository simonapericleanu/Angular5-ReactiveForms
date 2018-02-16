import { Routes } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from '../home/home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'animals', loadChildren: '../animals/animals.module#AnimalsModule' },
        { path: 'care-takers', loadChildren: '../care-takers/care-takers.module#CareTakersModule' },
    ]
  }
];
