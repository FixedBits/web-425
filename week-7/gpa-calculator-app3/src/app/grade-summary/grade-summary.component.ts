/**
 * Title: grade-summary.component.ts
 * Author: Victor Soto
 * Date: 04/28/2024
 * Description: grade summary component
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }
}
