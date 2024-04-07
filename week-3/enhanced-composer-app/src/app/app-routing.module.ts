/**
 * Title: app-routing.module.ts
 * Author: Victor Soto
 * Date: 03/31/2024
 * Description: Routing file
 * Source: https://github.com/buwebdev/web-425
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full',
  },
  {
    path: 'composer-list',
    component: ComposerListComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
