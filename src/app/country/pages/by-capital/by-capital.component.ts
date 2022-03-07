import { Component } from '@angular/core';
import { Countries } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {
  term: string = '';
  errSearch: boolean = false;
  dataCountries: Countries[] = [];
  loading: boolean = false;
  constructor( private countryService:CountryService) { }

  searchByCapital( term:string ){
    this.errSearch = false;
    this.loading   = true;
    this.term  = term;
    this.countryService.searchCapital( this.term ).subscribe(
      ( countries ) => {
        console.log( countries );
        this.loading = false;
        this.dataCountries = countries;
      },
      ( err ) => {
        console.log( err );
        this.errSearch = true;
        this.loading = false;
        this.dataCountries = [];
      }
    );
  }

  suggestions( term:string ){
    this.errSearch = false;

  }
}
