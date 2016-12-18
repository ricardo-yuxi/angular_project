import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) {}
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'Home', link: ['/home'] },
      { caption: 'Courses', link: ['/courses'] },
      { caption: 'Teachers', link: ['/teachers'] },
    ]
  }

}
