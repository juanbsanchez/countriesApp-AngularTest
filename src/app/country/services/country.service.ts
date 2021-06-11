import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Country} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams()
      .set('fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]>{

    const url = `${this.apiURL}/name/${term}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});

  }

  searchByCapital(term: string): Observable<Country[]>{
    const url = `${this.apiURL}/capital/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountryByCode(id: string): Observable<Country>{
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getCountryByRegion(name: string): Observable<Country[]>{

    const url = `${this.apiURL}/region/${name}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

}
