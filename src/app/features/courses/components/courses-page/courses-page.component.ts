import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  constructor(private store: Store<fromStore.CoursesState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.FetchHotels());
  }
}
