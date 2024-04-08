
/**
 * Title: home.component.ts
 * Author: Victor Soto
 * Date: 04/07/2024
 * Description: Home component
 * Source: https://github.com/buwebdev/web-425/blob/master/week-3/
 */


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

}
