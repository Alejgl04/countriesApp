import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Countries } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  term: string = '';
  errSearch: boolean = false;
  loading: boolean = false;
  showSuggestions: boolean = false;
  
  dataCountries: Countries[] = [];
  suggetionsCountries: Countries[] = [];

  constructor( private countryService:CountryService) { }

  search( term:string ){
    this.showSuggestions = false;
    this.errSearch = false;
    this.loading = true;
    
    this.term  = term;
    this.countryService.searchCountry( this.term ).subscribe(
      ( countries ) => {
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
    this.showSuggestions = true;
    this.term = term;
    this.countryService.searchCountry( term ).subscribe( 
      (countries:Countries[]) => {
        this.suggetionsCountries = countries.splice(0,5)
      },
      err => this.suggetionsCountries = []
    );
  }

  searchSuggestions( term: string ){
    this.search( term );
  }
}
