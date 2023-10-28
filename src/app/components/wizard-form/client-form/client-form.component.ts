import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () =>
        inject(ControlContainer, { skipSelf: true, host: true }),
    },
  ],
})
export class ClientFormComponent {
  @Input() groupName = '';
  @Input() form!: FormGroup | undefined;

  dniTypes = ['DNI', 'LE', 'LC'];
  civilStatus = ['SOLTERO', 'CASADO', 'DIVORCIADO'];
  genders = ['MASCULINO', 'FEMENINO'];
  personTypes = ['FISICA', 'JURIDICO'];
  ivaConditions = ['RESPONSABLE INSCRIPTO', 'CONSUMIDOR FINAL'];
  provinces = ['BUENOS AIRES', 'CORDOBA', 'SANTA FE', 'SANTIAGO DEL ESTERO'];

  hasErrorGeneric(field: string): boolean | undefined {
    return this.form?.get(field)?.invalid && this.form?.get(field)?.touched;
  }

  hasErrorRequired(field: string): boolean | undefined {
    return this.form?.get(field)?.hasError('required') && this.form?.get(field)?.touched;
  }
}
