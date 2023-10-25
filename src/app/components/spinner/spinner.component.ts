import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  isLoading$ = this.spinnerService.isLoading;

  constructor(private spinnerService: SpinnerService) {}
  ngOnInit(): void {}
}
