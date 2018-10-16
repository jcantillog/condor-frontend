import { map, filter, debounceTime, tap } from 'rxjs/operators';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'tm-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @ViewChild('filterInput')
  filterInput: ElementRef;

  @Output()
  filterChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    fromEvent(this.filterInput.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(50),
        tap((aFilter: string) => {
          this.filterChanged.emit(aFilter);
        })
      )
      .subscribe();
  }
}
