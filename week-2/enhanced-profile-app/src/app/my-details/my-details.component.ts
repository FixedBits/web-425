/**
 * Title: my-details.component.ts
 * Author: Victor Soto
 * Date: 03/26/2024
 * Description: My details component (Details view)
 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    '#TypeScript', "#2024", "#CodingWithAngular", "#ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}


@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor(){
    this.myProfile = new Person("Victor Soto", "Fried Rice", "Red");

  }

  ngOnInit(): void {}
}
