import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@shared';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    MaterialModule
  ],
  declarations: [CoursesPageComponent, SearchWidgetComponent],
  exports: [CoursesPageComponent]
})
export class CoursesModule {}
