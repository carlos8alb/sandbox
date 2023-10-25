import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-wizard-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.css'],
})
export class WizardFormComponent implements OnInit {
  clientForm!: FormGroup;
  vehicleForm!: FormGroup;

  dniTypes = ['DNI', 'LE', 'LC'];
  civilStatus = ['SOLTERO', 'CASADO', 'DIVORCIADO'];
  genders = ['MASCULINO', 'FEMENINO'];
  personTypes = ['FISICA', 'JURIDICO'];
  ivaConditions = ['RESPONSABLE INSCRIPTO', 'CONSUMIDOR FINAL'];
  provinces = ['BUENOS AIRES', 'CORDOBA', 'SANTA FE', 'SANTIAGO DEL ESTERO'];

  brands = ['FORD', 'TOYOTA', 'HYUNDAI', 'VOLKSWAGEN'];
  models = ['ETIOS', 'GOLF', 'VOYAGE', 'ARGO', 'HILUX'];
  useTypes = ['PARTICULAR', 'TRABAJO'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      dniType: ['', [Validators.required]],
      civilStatus: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      personType: ['', [Validators.required]],
      ivaCondition: ['', [Validators.required]],
      zipCode: [
        1000,
        [Validators.required, Validators.min(1000), Validators.max(9999)],
      ],
      province: ['', [Validators.required]],
    });

    this.vehicleForm = this.fb.group({
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
    });
  }

  hasErrorGeneric(form: FormGroup, field: string): boolean | undefined {
    return (
      form.get(field)?.invalid && form.get(field)?.touched
    );
  }

  hasErrorRequired(form: FormGroup, field: string): boolean | undefined {
    return (
      form.get(field)?.hasError('required') &&
      form.get(field)?.touched
    );
  }

  submitForm() {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      return;
    }

    if (this.vehicleForm.invalid) {
      this.clientForm.markAllAsTouched();
      return;
    }

    alert('Formulario enviado');
  }
}
