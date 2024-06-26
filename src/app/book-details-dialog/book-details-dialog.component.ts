/**
 * title: book-details-dialog.component.ts
 * purpose: functional code for displaying Book details dialog box
 * author: Cody Skelton
 * date: 04.21.2024
 * Code sourced from WEB 425 assignment requirements and course repository
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA)data) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
