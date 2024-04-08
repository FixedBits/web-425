 /**
 * Title: signin.component.ts
 * Author: Victor Soto
 * Date:  04/07/2024
 * Description: signin component
 * Source: https://github.com/buwebdev/web-425/blob/master/week-3/
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;
    this.router.navigate (['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}
