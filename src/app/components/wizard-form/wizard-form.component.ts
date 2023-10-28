import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ClientFormComponent } from './client-form/client-form.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

@Component({
  selector: 'app-wizard-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ClientFormComponent, VehicleFormComponent],
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.css'],
})
export class WizardFormComponent implements OnInit {
  form = this.fb.group({
    client: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      dniType: ['', [Validators.required]],
      number: [
        0,
        [Validators.required, Validators.min(1000000), Validators.max(99999999)],
      ],
      civilStatus: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      personType: ['', [Validators.required]],
      ivaCondition: ['', [Validators.required]],
      zipCode: [
        1000,
        [Validators.required, Validators.min(1000), Validators.max(9999)],
      ],
      province: ['', [Validators.required]],
    }),
    vehicle: this.fb.group({
      brand: ['', [Validators.required]],
      year: [
        2000,
        [
          Validators.required,
          Validators.min(1900),
          Validators.max(new Date().getFullYear() + 1),
        ],
      ],
      model: ['', [Validators.required]],
      brandNew: [false, [Validators.required]],
      gnc: [false, [Validators.required]],
      gncAmount: [0, [Validators.required, Validators.min(0)]],
      locator: [false, [Validators.required]],
      accesoriesAmount: [0, [Validators.required, Validators.min(0)]],
      useType: ['', [Validators.required]],
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    alert('Formulario enviado');
  }
}
