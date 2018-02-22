import { Component, OnInit } from '@angular/core';
import { Animal, CareTaker } from '../shared/interfaces';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public animals: Animal[];
  public careTakers: CareTaker[];
  

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.loadAnimals();
    this.loadCareTakers();
  }

  loadAnimals() {
    this.homeService.getAnimals().subscribe((data) => {
      this.animals = data;
    });
  }

  loadCareTakers() {
    this.homeService.getCareTakers().subscribe((data) => {
      this.careTakers = data;
    });
  }
}
