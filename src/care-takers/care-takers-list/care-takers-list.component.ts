import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CareTakersListService } from './care-takers-list.service';
import { CareTaker } from '../../shared/interfaces.d';

@Component({
  selector: 'app-care-takers-list',
  templateUrl: './care-takers-list.component.html',
})
export class CareTakersListComponent implements OnInit{
  public careTaker: CareTaker;
  public careTakers: CareTaker[] = [];

  constructor(private careTakersListService: CareTakersListService,
              private router: Router) {}

  public ngOnInit() {
    this.loadCareTakers();
  }

  private loadCareTakers() {
    this.careTakersListService.getCareTakers().subscribe(data => {
      this.careTakers = data;
    });
  }

  private onDeleteClick(id: number) {
    this.careTakersListService.deleteCareTaker(id).subscribe(data => {
      this.loadCareTakers();
    });
  }
}
