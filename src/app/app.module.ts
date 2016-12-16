import { CourseService } from './models/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import './core/rxjs-extensions';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'courses',
        component: CourseListComponent
      }
    ])
  ],
  declarations: [
    // Root features
    AppComponent,
    NavComponent,
    // Course feature
    CourseComponent,
    CourseListComponent,
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
