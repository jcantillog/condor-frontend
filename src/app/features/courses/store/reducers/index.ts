import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

import * as fromCoursesPage from './courses-page.reducer';
import { Actions } from '../actions/courses-page.actions';

export interface CoursesState {
  coursesPage: fromCoursesPage.State;
}

export const reducers: ActionReducerMap<CoursesState> = {
  coursesPage: fromCoursesPage.reducer
};

export const selectCoursesState = createFeatureSelector<CoursesState>(
  'courses'
);

export const selectHotelListState = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.coursesPage
);

export const selectCourses = createSelector(
  selectHotelListState,
  fromCoursesPage.getCourses
);
