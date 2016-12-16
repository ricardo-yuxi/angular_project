import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { CourseComponent } from './courses/course/course.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'courses',
        component: CourseComponent
      }
    ])
  ],
  declarations: [
    // Root features
    AppComponent,
    NavComponent,
    // Course feature
    CourseComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
