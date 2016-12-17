import { CourseListModule } from './courses/course-list/course-list.module';
import { CourseModule } from './courses/course/course.module';
import { CourseService } from './models/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import './core/rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CourseModule,
    CourseListModule
    RouterModule.forRoot([
      {
        path: 'courses',
        component: CourseListComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    AppRoutingComponent,
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
