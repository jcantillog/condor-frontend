import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  courses;
  isCourseListLoading;
  constructor(private store: Store<fromStore.CoursesState>) {
    this.courses = this.store.pipe(select(fromStore.selectCourses));
    this.isCourseListLoading = this.store.pipe(
        select(fromStore.selectCoursesLoading)
    );
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.FetchCourses());
  }

  onFilterChanged(e) {
    this.store.dispatch(new fromStore.FilterCourses(e));
  }

  onFilterCleared() {
    this.store.dispatch(new fromStore.FetchCourses());
  }
}
