import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/countries-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url);
  }

  buscarCapital(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url);
  }

  buscarPaisPorAlpha(id: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url);
  }
}
