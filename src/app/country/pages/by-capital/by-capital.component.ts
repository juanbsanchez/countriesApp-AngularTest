import { Component, OnInit } from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(term: string){
    this.error = false;
    this.term = term;
    this.countryService.searchByCapital(term)
      .subscribe((countries) => {
          this.countries = countries;
        },
        (error) => {
          this.error = true;
          this.countries = [];
        }
      );

  }

}
