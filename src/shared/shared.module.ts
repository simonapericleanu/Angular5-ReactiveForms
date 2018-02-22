import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    RouterModule
  ],
  providers: [
    HttpClient,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    BsDropdownModule,
    TypeaheadModule,
    RouterModule
  ]
})
export class SharedModule { }
