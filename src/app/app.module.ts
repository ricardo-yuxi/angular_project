import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    CourseModule,
    CourseListModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
