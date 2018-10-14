import { Action } from '@ngrx/store';
import { Course } from '../../models/course.model';

const ACTIONS_NAMESPACE = 'COURSES-LIST';

// Action Types

export const FETCH_COURSES = `${ACTIONS_NAMESPACE} - Fetch Courses`;
export const FETCH_COURSES_DONE = `${ACTIONS_NAMESPACE} - Fetch courses done`;
export const FETCH_COURSES_FAILED = `${ACTIONS_NAMESPACE} - Fetch courses failed`;

// Actions
export class FetchHotels implements Action {
  readonly type = FETCH_COURSES;

  constructor(public payload?: any) {}
}

export class FetchHotelsDone implements Action {
  readonly type = FETCH_COURSES_DONE;

  constructor(public payload: Course[]) {}
}

export class FetchHotelsFailed implements Action {
  readonly type = FETCH_COURSES_FAILED;

  constructor(public payload: any) {}
}

export type Actions = FetchHotels | FetchHotelsDone | FetchHotelsFailed;
