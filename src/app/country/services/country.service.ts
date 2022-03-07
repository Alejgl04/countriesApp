import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Countries } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor( private http: HttpClient ) { }

  get httpParams(){
    return new HttpParams().set('fields','name;capital;cca2;population;flags;currencies');
  }
  
  searchCountry( term: string ): Observable<Countries[]> {
    const url = `${ environment.apiUrl }/name/${ term }`;
    return this.http.get<Countries[]>( url );
    // capturar el error y transformarlo en un [] con el metodo of
    //   .pipe(
    //     catchError( err => of( [] ))
    //   );
  }

  searchCapital( term: string ):Observable<Countries[]> {
    const url = `${ environment.apiUrl }/capital/${ term }`;
    return this.http.get<Countries[]>( url );
  }

  getPaisByAlpha( id: string ):Observable<Countries[]>{
    const url = `${ environment.apiUrl }/alpha/${ id }`;
    return this.http.get<Countries[]>( url );
  }

  searchRegion( region:string ):Observable<Countries[]>{      
    const url = `${ environment.apiUrl }/region/${ region }`;
    return this.http.get<Countries[]>( url ); 
  }
}
