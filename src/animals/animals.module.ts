import { NgModule } from '@angular/core';
import { animalsRoutingModule } from './animals.routes';
import { AnimalsDomesticComponent } from './animals-domestic/animals-domestic.component';
import { AnimalsWildComponent } from './animals-wild/animals-wild.component';

@NgModule({
  declarations: [
    AnimalsDomesticComponent,
    AnimalsWildComponent
  ],
  imports: [
    animalsRoutingModule
  ],
  providers: [],
})
export class AnimalsModule { }
