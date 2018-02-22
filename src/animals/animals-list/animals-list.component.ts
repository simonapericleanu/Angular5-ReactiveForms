import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnimalsListService } from './animals-list.service';
import { Animal, CareTaker } from '../../shared/interfaces.d';
import { AnimalType } from '../../shared/enums/animal-type.enum';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
})
export class AnimalsListComponent implements OnInit {
  public animals: Animal[];
  public careTaker: CareTaker;
  public careTakers: CareTaker[] = [];

  constructor(private animalsListService: AnimalsListService,
              private router: Router) {}

  public ngOnInit() {
    this.loadAnimals();
    this.loadCareTakers();
  }

  private loadAnimals() {
    this.animalsListService.getAnimals().subscribe(data => {
      this.animals = data;
    });
  }

  private loadCareTakers() {
    this.animalsListService.getCareTakers().subscribe(data => {
      this.careTakers = data;
    });
  }

  private getTypeName(animal: Animal) {
    return AnimalType[animal.typeID].toLowerCase();
  }

  private getCareTakerName(careTakerID: number): string {
    const filteredCareTakers = this.careTakers.filter(careTaker => careTaker.id === careTakerID);

    return filteredCareTakers.length ? filteredCareTakers[0].firstName + ' ' + filteredCareTakers[0].lastName : '-';
  }

  private onDeleteClick(id: number) {
    this.animalsListService.deleteAnimal(id).subscribe(data => {
      this.loadAnimals();
    });
  }
}
