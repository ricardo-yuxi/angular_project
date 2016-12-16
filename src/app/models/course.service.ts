import { Injectable } from '@angular/core';

import { Course } from './course.model';

import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from './../core/config';

let coursesUrl = CONFIG.baseUrls.courses;

@Injectable()
export class CourseService {

  constructor(private http: Http) {}

    getCourses() {
      return <Observable<Course[]>>this.http
        .get(coursesUrl)
        .map(res => this.extractData<Course[]>(res))
    }

    private handleError(error: Response) {
      let msg = `Status code ${error.status} on url ${error.url}`;
      console.error(msg);
    }

    private extractData<T>(res: Response) {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status);
      }
      let body = res.json ? res.json() : null;
      return <T>(body && body.data || {});
    }

}
