// src/app/features/edit-book/edit-book.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookService } from '../../core/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit-book.html',
  styleUrls: ['./edit-book.scss'],
})
export class EditBook implements OnInit {
  errorMessage: string = '';
  bookForm!: FormGroup
  bookId!: string;

  // start the form with empty values
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    // get the book id from the url
    this.bookId = this.route.snapshot.paramMap.get('id')!;

    // create the form 
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      genre: ['', Validators.required],
      year: [0, Validators.required]
    });

    // get the book details to fill in the form 
    this.bookService.getBookById(this.bookId).subscribe({
      next: (book: Book) => {
        this.bookForm.patchValue(book);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Sorry, the librarian could not find the book details. Please try again later.';
      }
    });
  }

  submit(): void {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }
    // create an updated book object with the new values and existing id
    const updatedBook: Book = {
      id: this.bookId,
      ...this.bookForm.value
    };
    // update the book details - save the changes in the database/db.json file
    this.bookService.putBook(this.bookId, updatedBook).subscribe({
      next: () => {
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Sorry, the librarian could not update the book details. Please try again later.';
      }
    });
  }
}