import { Component } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent{
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  constructor(private countryService: CountryService) { }

  search(term: string){
    this.error = false;
    this.term = term;
    this.countryService.searchCountry(term)
      .subscribe((countries) => {
        this.countries = countries;
          console.log(countries);
        },
        (error) => {
          this.error = true;
          this.countries = [];
        }
      );

  }

  suggestions(term: string){
    this.error = false;
    // TODO create suggestions
  }

}
