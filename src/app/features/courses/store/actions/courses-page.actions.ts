import { Action } from '@ngrx/store';
import { Course } from '../../models/course.model';

const ACTIONS_NAMESPACE = 'COURSES-LIST';

// Action Types

export const FETCH_COURSES = `${ACTIONS_NAMESPACE} - Fetch Courses`;
export const FETCH_COURSES_DONE = `${ACTIONS_NAMESPACE} - Fetch courses done`;
export const FETCH_COURSES_FAILED = `${ACTIONS_NAMESPACE} - Fetch courses failed`;

export const FILTER_COURSES = `${ACTIONS_NAMESPACE} - Filter Courses`;
export const FILTER_COURSES_DONE = `${ACTIONS_NAMESPACE} - Filter courses done`;
export const FILTER_COURSES_FAILED = `${ACTIONS_NAMESPACE} - Filter courses failed`;

export const FETCH_MORE_COURSES = `${ACTIONS_NAMESPACE} - Fetch more courses`;
export const FETCH_MORE_COURSES_DONE = `${ACTIONS_NAMESPACE} - Fetch more courses done`;
export const FETCH_MORE_COURSES_FAILED = `${ACTIONS_NAMESPACE} - Fetch more courses failed`;

// Actions
export class FetchCourses implements Action {
  readonly type = FETCH_COURSES;

  constructor(public payload?: any) {}
}

export class FetchCoursesDone implements Action {
  readonly type = FETCH_COURSES_DONE;

  constructor(public payload: Course[]) {}
}

export class FetchCoursesFailed implements Action {
  readonly type = FETCH_COURSES_FAILED;

  constructor(public payload: any) {}
}

// Actions
export class FilterCourses implements Action {
  readonly type = FILTER_COURSES;

  constructor(public payload?: any) {}
}

export class FilterCoursesDone implements Action {
  readonly type = FILTER_COURSES_DONE;

  constructor(public payload: Course[]) {}
}

export class FilterCoursesFailed implements Action {
  readonly type = FILTER_COURSES_FAILED;
  constructor(public payload: any) {}
}

export class FetchMoreCourses implements Action {
    readonly type = FETCH_MORE_COURSES;
    constructor(public payload?: any) {}
}

export class FetchMoreCoursesDone implements Action {
    readonly type = FETCH_MORE_COURSES_DONE;
    constructor(public payload: Course[]) {}
}

export class FetchMoreCoursesFailed implements Action {
    readonly type = FETCH_MORE_COURSES_FAILED;
    constructor(public payload: any) {}
}

export type Actions =
  | FetchCourses
  | FetchCoursesDone
  | FetchCoursesFailed
  | FilterCourses
  | FilterCoursesDone
  | FilterCoursesFailed
  | FetchMoreCourses
  | FetchMoreCoursesDone
  | FetchMoreCoursesFailed;
