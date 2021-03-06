import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MaterialModule } from '@shared';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';

import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesService } from './services/courses';

import { reducers, effects } from './store';
import { SearchInputComponent } from './components/search-input/search-input.component';

const CoursesRoutes: Routes = [
  { path: 'courses', component: CoursesPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(CoursesRoutes),
    ReactiveFormsModule,
    InfiniteScrollModule,

    StoreModule.forFeature('courses', reducers),
    EffectsModule.forFeature(effects),
    MaterialModule
  ],
  declarations: [
    CoursesPageComponent,
    SearchWidgetComponent,
    CourseListComponent,
    CourseComponent,
    SearchInputComponent
  ],
  providers: [CoursesService],
  exports: [CoursesPageComponent]
})
export class CoursesModule {}
