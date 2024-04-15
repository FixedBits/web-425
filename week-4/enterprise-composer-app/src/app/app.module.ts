/**
 * Title: app.module.ts
 * Author: Victor Soto
 * Date: 03/31/2024
 * Description: App Module
 * Source: https://github.com/buwebdev/web-425
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ComposerListComponent,
    ComposerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
