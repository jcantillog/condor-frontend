import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}

  fetchCourses(name): Observable<Course[]> {
    const nameFilter = name ? `name=${name}` : '';
    const queryUrl = `http://localhost:3000/api/hotel?${nameFilter}`;

    return this.http
      .get<Course[]>(queryUrl)
      .pipe(map((response: any) => response.items));
  }

  fetchAllCourses(): Observable<Course[]> {
    const queryUrl = `http://localhost:3000/api/hotel`;

    return this.http
      .get<Course[]>(queryUrl)
      .pipe(map((response: any) => response.items));
  }
}
