/**
 * Title: book-details-dialog.component.ts
 * Author: Victor Soto
 * Date: 04/21/2024
 * Description: Book Details Dialog Component
 */

import { Component, OnInit, Inject } from '@angular/core'; // Import Inject
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; // Import MAT_DIALOG_DATA / MatDialogRef
import { IBook } from '../book.interface'; // Import IBook

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(
    private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
