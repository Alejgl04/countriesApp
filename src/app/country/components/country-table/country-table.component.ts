import { Component, Input, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {
  @Input() dataCountries: Countries[] = [];
  p: number = 1;
  responsive: boolean;
  constructor() { 
    this.responsive = true
  }

  ngOnInit(): void {

  }

}
