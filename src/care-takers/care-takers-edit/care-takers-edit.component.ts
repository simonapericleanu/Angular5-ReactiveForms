import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CareTaker } from '../../shared/interfaces';
import { CareTakersEditService } from './care-takers-edit.service';

@Component({
  selector: 'app-care-takers-edit',
  templateUrl: './care-takers-edit.component.html',
})
export class CareTakersEditComponent {
  public id: number;
  public careTakersForm: FormGroup;
  public careTaker: CareTaker;

  public get title(): string {
    if (!this.id) {
        return 'Add a new care taker';
    } else {
        return 'Edit care taker';
    }
  }

  constructor(private formBuilder: FormBuilder,
    private careTakersEditService: CareTakersEditService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.careTakersForm = this.generateForm();
  }

  ngOnInit() {
    this.getUrlData();
    this.loadCareTaker(this.id);
  }

  private getUrlData() {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  private generateForm(): FormGroup {
    return this.formBuilder.group({
      id: null,
      firstName: [null, Validators.required],
      lastName: [null, Validators.required]
    });
  }

  private onSubmit($event) {
    const value = this.careTakersForm.value;
    for (const field in this.careTakersForm.controls) {
      this.careTakersForm.get(field).markAsTouched();
    }
    if (!this.careTakersForm.valid) {
      return;
    }
    if (!this.id) {
      this.careTakersEditService.addCareTaker(value).subscribe(data => {
        this.router.navigate(['/care-takers/list']);
      });
    } else {
      this.careTakersEditService.updateCareTaker(this.id, value).subscribe(data => {
        this.router.navigate(['/care-takers/list']);
      });
    }
  }

  private loadCareTaker(id: number) {
    if(this.id) {
      this.careTakersEditService.getCareTaker(id).subscribe(data => {
        this.careTaker = data[0];
        this.careTakersForm.setValue(this.careTaker);
      });
    }
  }

  private onCancelClick() {
    this.router.navigate(['/care-takers/list']);
  }
}
