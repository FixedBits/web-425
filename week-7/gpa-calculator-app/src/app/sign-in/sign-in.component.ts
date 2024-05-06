/**
 * Title: base-layout.component.ts
 * Author: Victor Soto
 * Date: 04/28/2024
 * Source: hgpa-calculator-apphttps://github.com/buwebdev/web-425/blob/master/week-7/
 * Source-2: https://youtu.be/OFBL4bKno_s
 * Description: Function sign-out for client to be able to sign out of app after signing in
 */

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Add Validators here
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])] // Add Validators here
    })
  }

  get form() { return this.signinForm.controls; } // Add this helper function

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1)
      this.router.navigate(['/'])
    } else {
      this.errorMessage = `The student ID you entered is invalid, please try again.`;
    }
  }
}
