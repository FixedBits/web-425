/**
 * Title: app.routing.ts
 * Author: Victor Soto
 * Date: 04/07/2024
 * Description: App routing
 * Source: https://github.com/buwebdev/web-425/blob/master/week-3/
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SigninComponent
    },
    {
      path: 'home',
      component: HomeComponent
    }
]
