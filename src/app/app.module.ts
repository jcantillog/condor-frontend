import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';

const AppRoutes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(AppRoutes, { enableTracing: true }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    // App Modules Imports
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
