import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}

  fetchCourses({ stars, name }): Observable<Course[]> {
    const nameFilter = name ? `name=${name}` : '';
    const starsFilter = stars ? `&stars=${stars.join(',')}` : '';
    const queryUrl = `http://localhost:3000/api/hotel?${nameFilter}${starsFilter}`;

    return this.http.get<Course[]>(queryUrl);
  }

  fetchAllCourses(): Observable<Course[]> {
    const queryUrl = `http://localhost:3000/api/hotel`;

    return this.http.get<Course[]>(queryUrl);
  }
}
