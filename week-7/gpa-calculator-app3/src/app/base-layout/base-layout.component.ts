/**
 * Title: base-layout.component.ts
 * Author: Victor Soto
 * Date: 04/28/2024
 * Source: hgpa-calculator-apphttps://github.com/buwebdev/web-425/blob/master/week-7//
 * Source-2: https://youtu.be/OFBL4bKno_s
 * Description: Function sign-out for client to be able to sign out of app after signing in
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.2 - Reactive Forms';
  }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
