// src/app/features/book-detail/book-detail.ts

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookService } from '../../core/book';
import { Book } from '../../models/book.model';
import * as bootstrap from 'bootstrap';

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

  // confirm delete and close modal
  confirmDelete(): void {
    // ensure the book exists before trying to delete
    if (!this.book?.id) return;

    // send delete request to db.json
    this.bookService.deleteBook(String(this.book.id)).subscribe({
      next: () => {
        const modalElement = document.getElementById('deleteModal');

        // close the modal
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal?.hide();
        }
        // remove the modal backdrop and allow scrolling again
        document.body.classList.remove('modal-open');
        document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());

        // navigate back to the book list
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  // favourite toggle heart 
  toggleFavorite(): void {
    // ensure the book exists before trying to toggle favourite status
    if (!this.book?.id) return;

    // toggle the status of the book
    const newFavorite = !(this.book.favorite ?? false);

    // update the book object immediately
    this.book.favorite = newFavorite;

    // create a new book object with the updated status to send to db.json
    const updatedBook: Book = {
      ...this.book,
      favorite: newFavorite
    };

    // send the update to the db.json
    this.bookService.putBook(String(this.book.id), updatedBook).subscribe({
      error: (err) => {
        console.error(err);
        this.book!.favorite = !newFavorite;
      }
    });
  }
  
}