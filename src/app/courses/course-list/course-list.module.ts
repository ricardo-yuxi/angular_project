import { CourseListComponent } from './course-list.component';
import { CourseListRoutingModule } from './course-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CourseListRoutingModule
  ],
  declarations: [CourseListComponent]
})
export class CourseListModule { }
