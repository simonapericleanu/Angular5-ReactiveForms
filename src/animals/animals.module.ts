import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { animalsRoutingModule } from './animals.routes';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsCardComponent } from './animals-card/animals-card.component';
import { AnimalsEditComponent } from './animals-edit/animals-edit.component';

@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalsCardComponent,
    AnimalsEditComponent
  ],
  imports: [
    SharedModule,
    animalsRoutingModule
  ],
  providers: [],
})
export class AnimalsModule { }
