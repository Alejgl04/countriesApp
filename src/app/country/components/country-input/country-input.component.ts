import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  @Input() placeholder: string = '';

  @Output() eventSearching: EventEmitter<string> = new EventEmitter();  
  @Output() eventDebounce: EventEmitter<string>  = new EventEmitter();

  debouncer: Subject<string> = new Subject;

  term: string = '';
  constructor() { }

  ngOnInit(): void {
    this.debouncer.
    pipe( debounceTime(300) )
    .subscribe(
      value => {
        this.eventDebounce.emit( value );
      }
    )
  }

  search(){
    this.eventSearching.emit( this.term );
  }

  keyboardPress(){
     this.debouncer.next( this.term );
  }
}
