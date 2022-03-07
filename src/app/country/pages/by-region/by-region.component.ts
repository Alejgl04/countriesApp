import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {
  region: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActive: string = '';
  dataCountries: Countries[] = [];
  loading: boolean = false;
  constructor( private countryService:CountryService) { }

  getClassButton(region:string): string {
    return (region === this.regionActive) ? 'btn btn-primary':'btn btn-outline-primary';
  }

  ngOnInit(): void {
  }

  activateRegion( region:string ){
    if( region === this.regionActive ) { return; }
    this.regionActive = region;
    this.dataCountries = [];
    this.loading = true;
    this.countryService.searchRegion( this.regionActive ).subscribe(
      ( region ) => {
        this.loading = false;
        this.dataCountries = region;
      },
      ( err ) => {
        console.log( err );
        this.loading = false;
        this.dataCountries = [];
      }
    );
  }
}
