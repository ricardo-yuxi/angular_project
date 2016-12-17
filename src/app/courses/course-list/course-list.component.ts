import { Course, CourseService } from './../../models';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Observable<Course[]>;

  constructor(private courseService: CourseService) { 
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(courses => {
        this.courses = this.courseService.getCourses();
      });
  }

  ngOnInit() {
    this.getCourses();
  }

}
