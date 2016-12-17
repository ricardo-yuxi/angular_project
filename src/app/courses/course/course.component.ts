import { Component, OnInit, Input } from '@angular/core';

import { Course, CourseService } from './../../models';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input()
  course: Course;

  constructor(
    private courseService: CourseService) { }
  
  ngOnInit() {
  }

}
