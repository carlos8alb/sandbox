import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  get isLoading() {
    return this.isLoading$.asObservable();
  }

  get show() {
    this.isLoading$.next(true);
    return this.isLoading$.value;
  }

  get hide() {
    this.isLoading$.next(false);
    return this.isLoading$.value;
  }
}
