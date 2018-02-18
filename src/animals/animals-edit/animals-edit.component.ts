import { Component, OnInit } from '@angular/core';
import { AnimalType } from '../../shared/enums/animal-type.enum';

@Component({
  selector: 'app-animals-edit',
  templateUrl: './animals-edit.component.html',
})
export class AnimalsEditComponent implements OnInit {
  public get types() {
    console.log(Object.keys(AnimalType).filter(item => !Number(item))
    .map(key => ({ id: AnimalType[key], name: key })));
    return Object.keys(AnimalType).filter(item => !Number(item))
              .map(key => ({ id: AnimalType[key], name: key }));
  }

  ngOnInit() {
  }

}
