// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { BooksListComponent } from './features/books-list/books-list';
import { BookDetail as BookDetailComponent } from './features/book-detail/book-detail';
import { EditBook } from './features/edit-book/edit-book';
import { AddBook } from './features/add-book/add-book';

// paths to redirect to respective components
export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BooksListComponent },
  { path: 'books/add', component: AddBook },
  { path: 'books/edit/:id', component: EditBook },
  { path: 'books/:id', component: BookDetailComponent },
  
  // wildcard route for any sneaky paths not listed.
  // redirects to the book list 
  { path: '**', redirectTo: 'books' }
];
