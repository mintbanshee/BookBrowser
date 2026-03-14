// src/app/features/add-book/add-book.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../../core/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-book.html',
  styleUrls: ['./add-book.scss'],
})
export class AddBook implements OnInit {
  errorMessage: string = '';
  bookForm!: FormGroup

  // start the form with empty values
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {}


  ngOnInit(): void {

    // create the form 
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      genre: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }
    // create a new book object with the form values
    const newBook: Book = this.bookForm.value;

    this.bookService.postBook(newBook).subscribe({
      next: () => {
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Sorry, the book could not be summoned through the portal. Please try again.';
      }
    });
  }
} 