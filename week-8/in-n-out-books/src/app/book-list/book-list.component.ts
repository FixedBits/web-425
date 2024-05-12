/**
 * Title: book-list.component.ts
 * Author: Victor Soto
 * Date: 05/12/2024
 * Description: Book list component (book list page)
 */


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: IBook[] = [];

  constructor(private bookService: BooksService, public dialog: MatDialog) {
    this.bookService.getBooks().subscribe(res => {
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            });
          }
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          });
        }
      }
    });
  }

  book: IBook;

  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      width: '800px',
      data: {book: this.book}
    });
  }

  ngOnInit(): void {
  }
}
