// src/app/features/book-detail/book-detail.ts

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookService } from '../../core/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-detail.html',
  styleUrls: ['./book-detail.scss'],
})

// display book details and handle errors 
export class BookDetail implements OnInit {
  book?: Book;
   errorMessage: string = '';

    // inject ActivatedRoute to fetch the book ID and get the book details from the BookService
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private bookService: BookService,
      private cdr: ChangeDetectorRef,


    ) {}

    ngOnInit(): void {
      // get the book ID
      this.route.paramMap.subscribe(params => {
        const bookId = this.route.snapshot.paramMap.get('id');

      // get the book details using the BookService
      if (bookId) {
      this.bookService.getBookById(bookId).subscribe({
        next: (book) => {
          this.book = book;
          this.errorMessage = '';
          // force change detection to show book details on page load
          // having an issue where details wont show unless i save on book-detail.html even if not making changes
          // have to save to load every book click. this is to fix that. 
          this.cdr.detectChanges();
        },
        // error if details not found
        error: (err) => {
          console.error(err);
          this.errorMessage = "It looks like the librarian lost the details for this book.";
        }
      });
    }});
  }
  // delete book and return to book list
  deleteBook(): void {
    if (!this.book) {
      return;
    }
    if (!confirm('Are you sure you want to delete this book?')) {
      return;
    }
    
    this.bookService.deleteBook(this.book?.id!).subscribe({
      next: () => {
        alert('Book deleted successfully.');
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error(err);
        alert('Sorry, the librarian did not want to let you delete this book. Please try again later.');
      }
    });
  } 

/* 
  toggleFavorite(): void {
    if (!this.book || !this.book.id) {
      return;
    }

    const updatedBook: Book = {
      ...this.book,
      favorite: !this.book.favorite
    };

    this.bookService.putBook(this.book.id, updatedBook).subscribe({
      next: () => {
        this.book = updatedBook;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Sorry, the favorite status could not be updated.';
      }
    });
  } */
}