import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../core/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
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
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    // get the book ID
    const bookId = Number(this.route.snapshot.paramMap.get('id'));

    // get the book details using the BookService
    this.bookService.getBookById(bookId).subscribe({
      next: (book) => {
        this.book = book;
      },
      // error if details not found
      error: (err) => {
        console.error(err);
        this.errorMessage = "It looks like the librarian lost the details for this book.";
      }
    });
  }






}