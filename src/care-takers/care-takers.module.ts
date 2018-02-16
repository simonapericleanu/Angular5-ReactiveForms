import { NgModule } from '@angular/core';
import { careTakersRoutingModule } from './care-takers.routes';
import { CareTakersDomesticComponent } from './care-takers-domestic/care-takers-domestic.component';
import { CareTakersWildComponent } from './care-takers-wild/care-takers-wild.component';

@NgModule({
  declarations: [
    CareTakersDomesticComponent,
    CareTakersWildComponent
  ],
  imports: [
    careTakersRoutingModule
  ],
  providers: [],
})
export class CareTakersModule { }
