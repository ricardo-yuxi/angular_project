import { CourseListComponent } from './course-list/course-list.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CourseListComponent,
      },
      {
        path: ':id',
        component: CourseComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule { }

export const routedComponents = [CoursesComponent, CourseListComponent, CourseComponent];