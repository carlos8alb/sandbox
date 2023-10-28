import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () =>
        inject(ControlContainer, { skipSelf: true, host: true }),
    },
  ],
})
export class VehicleFormComponent {
  @Input() groupName = '';
  @Input() form!: FormGroup | undefined;

  brands = ['FORD', 'TOYOTA', 'HYUNDAI', 'VOLKSWAGEN'];
  models = ['ETIOS', 'GOLF', 'VOYAGE', 'ARGO', 'HILUX'];
  useTypes = ['PARTICULAR', 'TRABAJO'];

  hasErrorGeneric(field: string): boolean | undefined {
    return this.form?.get(field)?.invalid && this.form?.get(field)?.touched;
  }

  hasErrorRequired(field: string): boolean | undefined {
    return this.form?.get(field)?.hasError('required') && this.form?.get(field)?.touched;
  }
}
