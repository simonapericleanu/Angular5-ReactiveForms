import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

@NgModule({
    declarations: [
        HomeComponent
    ],
    providers: [
        HomeService
    ],
    imports: [
        SharedModule
    ]
})
export class HomeModule { }