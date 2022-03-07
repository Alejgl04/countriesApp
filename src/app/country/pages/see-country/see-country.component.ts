import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { Countries } from '../../interfaces/country.interfaces';
import { of } from 'rxjs';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {
  country!: Countries;
  constructor( 
    private route:ActivatedRoute,
    private router:Router,
    private countryServices:CountryService
    ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.params
      .pipe(
        switchMap(( param ) => this.countryServices.getPaisByAlpha( param.id ) ),
        tap( console.log ),
        catchError( err => of( this.router.navigate(['/']) ))
      )
      .subscribe(
        responseCountry =>{
          this.country = responseCountry[0];
           
        } 
      )  
    }, 500);
  }
}
