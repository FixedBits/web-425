
/**
 * Title: base-layout.component.ts
 * Author: Victor Soto
 * Date: 04/28/2024
 * Source: https://github.com/buwebdev/web-425/blob/master/week-6/gpa-calculator-app/
 * Source-2: https://youtu.be/OFBL4bKno_s
 * Description: can-activate has to return as true OR false value
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user');

    if (sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }
}
