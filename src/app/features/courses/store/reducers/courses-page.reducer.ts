import { FETCH_COURSES } from '../actions/courses-page.actions';
import { Course } from '../../models/course.model';
import * as fromCourses from '../actions/courses-page.actions';

export interface State {
  data: Course[];
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromCourses.Actions
): State {
  switch (action.type) {
    case fromCourses.FETCH_COURSES:
      return {
        ...state,
        loading: true
      };
    case fromCourses.FETCH_COURSES_DONE:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      };
    case fromCourses.FETCH_COURSES_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export const getCoursesLoading = (state: State) => state.loading;
export const getCoursesLoaded = (state: State) => state.loaded;
export const getCourses = (state: State) => state.data;
