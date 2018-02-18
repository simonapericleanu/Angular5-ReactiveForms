import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  exports: [
    CommonModule,
    BsDropdownModule
  ]
})
export class SharedModule { }
