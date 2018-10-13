import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@shared';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';

const CoursesRoutes: Routes = [
  { path: 'courses', component: CoursesPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(CoursesRoutes),
    MaterialModule
  ],
  declarations: [CoursesPageComponent],
  exports: [CoursesPageComponent]
})
export class CoursesModule {}
