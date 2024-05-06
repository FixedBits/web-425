/**
 * Title: home.component.ts
 * Author: Victor Soto
 * Date: 05/05/2024
 * Source: https://github.com/buwebdev/web-425/blob/master/week-7
 */

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Add import statement for FormGroup, FormBuilder, and Validators

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Remove transcriptEntry variable
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;
  transcriptForm: FormGroup; // Add a new variable named transcriptForm of type FormGroup

  constructor(private fb: FormBuilder) { // Add the FormBuilder to the components constructor
    // Remove the transcriptEntry assignment from the components constructor
  }

  ngOnInit(): void {
    // Use the FormBuilder to build a new FormGroup with two FormControls: course and grade
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required ],
      grade: ['', Validators.required]
    });
  }

  // Add a get() function named form that returns the transcriptForm controls
  get form() { return this.transcriptForm.controls; }

  // Rename the saveEntry() function to onSubmit() and add a parameter called event
  onSubmit(event): void {
    // Push a new object literal to the transcriptEntries array using the values captured from the form
    this.transcriptEntries.push({ course: this.form.course.value, grade: this.form.grade.value });
    // Use the event object to reset Validation
    event.currentTarget.reset();
    this.calculateResults();
  }

  calculateResults(): void {
    let gpa: number = 0;
    for (let entry of this.transcriptEntries) {
      switch (entry.grade) {
        case 'A': gpa += 4.0; break;
        case 'A-': gpa += 3.7; break;
        case 'B+': gpa += 3.3; break;
        case 'B': gpa += 3.0; break;
        case 'B-': gpa += 2.7; break;
        case 'C+': gpa += 2.3; break;
        case 'C': gpa += 2.0; break;
        case 'C-': gpa += 1.7; break;
        case 'D+': gpa += 1.3; break;
        case 'D': gpa += 1.0; break;
        case 'D-': gpa += 0.7; break;
        case 'F': gpa += 0.0; break;
      }
    }
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries(): void {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
