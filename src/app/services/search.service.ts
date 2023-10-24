import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Movie, Response } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  API_KEY = 'b9492d8c';
  URL = 'https://www.omdbapi.com';

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string): Observable<Movie[]> {
    let params = new HttpParams();
    params = params.set('apikey', this.API_KEY);
    params = params.set('s', searchTerm);

    return this.http.get<Response>(this.URL, { params }).pipe(
      map((resp: Response) => {
        return resp.Search;
      })
    );
  }
}
