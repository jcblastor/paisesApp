import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/countries-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,population,flags,cca2')
  }

  constructor(private http: HttpClient) { }

  buscarPais(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarPaisPorAlpha(id: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url);
  }

  buscarPorRegion(region: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
