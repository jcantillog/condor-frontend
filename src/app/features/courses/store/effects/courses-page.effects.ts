import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as CoursesPageActions from '../actions/courses-page.actions';
import { CoursesService } from '../../services/courses';

@Injectable()
export class CoursesPageEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}

  @Effect()
  fetchAllCourses$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesPageActions.FETCH_COURSES),
    switchMap((action: CoursesPageActions.FetchCourses) =>
      this.coursesService.fetchAllCourses().pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new CoursesPageActions.FetchCoursesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of(new CoursesPageActions.FetchCoursesFailed(error))
        )
      )
    )
  );

  @Effect()
  fetchCourses$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesPageActions.FILTER_COURSES),
    switchMap((action: CoursesPageActions.FilterCourses) =>
      this.coursesService.fetchCourses(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new CoursesPageActions.FetchCoursesDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error =>
          of(new CoursesPageActions.FetchCoursesFailed(error))
        )
      )
    )
  );
}
