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

  search(){
    this.error = false;
    this.countryService.searchCountry(this.term)
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

}
