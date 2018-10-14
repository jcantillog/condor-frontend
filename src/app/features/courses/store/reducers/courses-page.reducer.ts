import { FETCH_COURSES } from '../actions/courses-page.actions';
import { Course } from '../../models/course.model';
import * as fromCourses from '../actions/courses-page.actions';

export interface State {
  data: Course[];
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  data: [
    {
      href: null,
      name: 'Professional Ethics',
      imageUrl: '/Content/uploads/6a20a838-173c-4b4d-ae25-01903f9da68d.jpg',
      description:
        // tslint:disable-next-line:max-line-length
        'FL LMTs, 3 Ethics CEUs (or 2 Ethics, 1 elective):  \nProfessional ethics are not a set of rules.  They are guidelines that let us to write our own rules within the ethical framework of our profession.\nClear ethics are vital to business success. ',
      price: 14.5,
      rating: 4
    }
  ],
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
