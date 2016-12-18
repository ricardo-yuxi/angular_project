import { CommonModule } from '@angular/common';
import { CoursesRoutingModule, routedComponents } from './courses-routing.module';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [],
  declarations: [
    routedComponents
    ],
    providers: [],
})
export class CoursesModule { }
