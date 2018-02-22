import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { careTakersRoutingModule } from './care-takers.routes';
import { CareTakersListComponent } from './care-takers-list/care-takers-list.component';
import { CareTakersListService } from './care-takers-list/care-takers-list.service';

import { CareTakersEditComponent } from './care-takers-edit/care-takers-edit.component';
import { CareTakersEditService } from './care-takers-edit/care-takers-edit.service';

@NgModule({
  declarations: [
    CareTakersListComponent,
    CareTakersEditComponent
  ],
  imports: [
    SharedModule,
    careTakersRoutingModule
  ],
  providers: [
    CareTakersEditService,
    CareTakersListService
  ],
})
export class CareTakersModule { }
