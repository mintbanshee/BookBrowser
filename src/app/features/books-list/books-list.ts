// src/app/features/books-list/books-list.ts

import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../core/book'; 
import { Book } from '../../models/book.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h1>Books</h1>

      <div *ngIf="loading()">Loading books...</div>
      <div *ngIf="error()">{{ error() }}</div>

        <ul *ngIf="!loading() && books().length > 0">
          <li *ngFor="let book of books()">
          <a [routerLink]="['/books', book.id]">
              {{ book.title }} by {{ book.author }}
            </a>
          </li>
        </ul>
      `
    })

// fetch books from the service and handle errors
export class BooksListComponent implements OnInit {
  private bookService = inject(BookService);
  books = signal<Book[]>([]);
  loading = signal(true);
  error = signal('');

  // fetch books when component loads and update signals if needed 
  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: data => {
        this.books.set(data);
        this.loading.set(false);
      }, 
      // error if could not load books
      error: err => {
        this.error.set('Sorry, our librarian could not find the books. We will buy her new glasses so please try again soon!');
        this.loading.set(false);
      }
    });
  }
}