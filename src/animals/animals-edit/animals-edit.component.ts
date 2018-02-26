import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AnimalType } from '../../shared/enums/animal-type.enum';
import { AnimalsEditService } from './animals-edit.service';
import { Animal } from '../../shared/interfaces';

@Component({
  selector: 'app-animals-edit',
  templateUrl: './animals-edit.component.html',
})
export class AnimalsEditComponent implements OnInit {
  public id: number;
  public animalsForm: FormGroup;
  public careTakers = [];
  public types = [];
  public animal: Animal;

  public get title(): string {
    if (!this.id) {
        return 'Add a new animal';
    } else {
        return 'Edit animal';
    }
  }

  constructor(private formBuilder: FormBuilder,
    private animalsEditService: AnimalsEditService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.animalsForm = this.generateForm();
    this.types = Object.keys(AnimalType).filter(item => !Number(item))
              .map(key => ({id: AnimalType[key], name: key.toLowerCase()}) );
  }

  ngOnInit() {
    this.getUrlData();
    this.loadCareTakers();
    this.loadAnimal(this.id);
  }

  private getUrlData() {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  private generateForm(): FormGroup {
    return this.formBuilder.group({
      id: null,
      name: [null, Validators.required],
      typeID: [null, Validators.required],
      class: [null, Validators.required],
      careTakerID: [null, Validators.required],
    });
  }

  private onSubmit($event) {
    const value = this.animalsForm.value;
    for (const field in this.animalsForm.controls) {
      this.animalsForm.get(field).markAsTouched();
    }
    if (!this.animalsForm.valid) {
      return;
    }
    if (!this.id) {
      this.animalsEditService.addAnimal(value).subscribe(data => {
        this.router.navigate(['/animals/list']);
      });
    } else {
      this.animalsEditService.updateAnimal(this.id, value).subscribe(data => {
        this.router.navigate(['/animals/list']);
      });
    }
  }

  private loadCareTakers() {
    this.animalsEditService.getCareTakers().subscribe(data => {
      this.careTakers = data;
    });
  }

  private loadAnimal(id: number) {
    if(this.id) {
      this.animalsEditService.getAnimal(id).subscribe(data => {
        this.animal = data[0];
        this.animalsForm.setValue(this.animal);
      });
    }
  }

  private onCancelClick() {
    this.router.navigate(['/animals/list']);
  }

}
