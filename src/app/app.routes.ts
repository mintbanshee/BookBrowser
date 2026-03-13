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
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'books/edit/:id', component: EditBook }
];
