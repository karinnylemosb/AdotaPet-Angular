import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <app-pages></app-pages>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['../app/pages/pages.component.css']
})
export class AppComponent {

}
