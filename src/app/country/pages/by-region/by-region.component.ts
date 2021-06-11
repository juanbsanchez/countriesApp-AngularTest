import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class ByRegionComponent implements OnInit {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

  }

  getCssClass (region: string) {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activateRegion(region: string){

    if(region === this.activeRegion){return;}

    this.activeRegion = region;
    this.countries = [];

    this.countryService.getCountryByRegion(this.activeRegion)
      .subscribe(
        (countries) => {
          this.countries = countries;

        },
        error => {
          console.log(error);
        }
      )
  }

}
