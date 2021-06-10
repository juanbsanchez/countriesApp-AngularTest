import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Country} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]>{

    const url = `${this.apiURL}/name/${term}`;

    return this.http.get<Country[]>(url);

  }

  searchByCapital(term: string): Observable<Country[]>{
    const url = `${this.apiURL}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByCode(id: string): Observable<Country>{
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

}
