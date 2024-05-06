/**
 * Title: sign-in.service.ts
 * Author: Victor Soto
 * Date: 05/05/2024
 * Source: https://github.com/buwebdev/web-425/blob/master/week-6/gpa-calculator-app
 * Source-2: https://youtu.be/OFBL4bKno_s
 * Description: Adding can-activate to base-layout component
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
