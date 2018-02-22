import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { animalsRoutingModule } from './animals.routes';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsListService } from './animals-list/animals-list.service';
import { AnimalsEditComponent } from './animals-edit/animals-edit.component';
import { AnimalsEditService } from './animals-edit/animals-edit.service';


@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalsEditComponent
  ],
  imports: [
    SharedModule,
    animalsRoutingModule
  ],
  providers: [
    AnimalsEditService,
    AnimalsListService
  ],
})
export class AnimalsModule { }
