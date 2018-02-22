import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
  ],
  providers: [],
})
export class LayoutModule { }
