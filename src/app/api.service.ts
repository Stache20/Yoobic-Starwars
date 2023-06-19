import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResult {
  count: number;
  page: number;
  next: string;
  previous?: any;
  results: any[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTestConnection(): Observable<any> {
    return this.http.get('https://swapi.dev/api/people/');
  }

  getStarwarsHeroes(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `https://swapi.dev/api/people/?/page=${page}`
    );
  }

  getStarwarsDetails(id: any): Observable<any> {
    return this.http.get(`https://swapi.dev/api/people/?search=${id}`);
  }
}
