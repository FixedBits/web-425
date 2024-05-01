/**
 * Title: base-layout.component.ts
 * Author: Victor Soto
 * Date: 04/28/2024
 * Source: https://github.com/buwebdev/web-425/blob/master/week-6/gpa-calculator-app1/
 */

import { Component, OnInit } from '@angular/core';



/**
 * Title: base-layout.component.ts
 * Author: Victor Soto
 * Date: 04/28/2024
 * Description: base layout component
 */

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {
  }

}
