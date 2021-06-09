import { Component } from '@angular/core';
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent{
  term: string = '';
  error: boolean = false;
  constructor(private countryService: CountryService) { }

  search(){
    this.error = false;
    this.countryService.searchCountry(this.term)
      .subscribe((countries) => {
          console.log(countries);
        },
        (error) => {
          this.error = true;
        }
      );

  }

}
