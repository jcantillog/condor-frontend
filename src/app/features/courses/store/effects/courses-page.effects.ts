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
    private hotelsService: CoursesService
  ) {}

  @Effect()
  fetchAllHotels$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesPageActions.FETCH_COURSES),
    switchMap((action: CoursesPageActions.FetchHotels) =>
      this.hotelsService.fetchAllCourses().pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new CoursesPageActions.FetchHotelsDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new CoursesPageActions.FetchHotelsFailed(error)))
      )
    )
  );
}
