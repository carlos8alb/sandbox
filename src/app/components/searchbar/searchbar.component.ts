import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EMPTY, Observable, fromEvent } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap
} from 'rxjs/operators';
import { Movie } from 'src/app/models/models';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SearchbarComponent implements OnInit {
  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;
  movies$!: Observable<Movie[]>;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {

    this.movies$ = fromEvent<KeyboardEvent>(
      this.input?.nativeElement,
      'keyup'
    ).pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement)?.value),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchTerm: string) => {
        return this.searchService.searchMovies(searchTerm);
      }),
      catchError((err) => {
        const message = err?.error?.Error ?? 'Unexpected error';
        alert(message);
        return EMPTY;
      })
    );
  }
}
