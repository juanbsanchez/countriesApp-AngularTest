import { Component } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent{
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;
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
    this.showSuggestions = true;
    this.error = false;
    this.term = term;

    this.countryService.searchCountry(term)
      .subscribe(countries => {
        this.suggestedCountries = countries.splice(0,5);
      },
        error => {
          this.suggestedCountries = [];
        })
  }

  searchSuggested(term: string){
    this.search(term);
    this.showSuggestions = false;
  }

}
