/**
 * Title: app.component.ts
 * Author: Victor Soto
 * Date: 04/21/2024
 * Description: App component
 * Source: https://github.com/buwebdev/web-425/tree/master/week-5/in-n-out-booksp1/src/app
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out-Books";
  }
}
