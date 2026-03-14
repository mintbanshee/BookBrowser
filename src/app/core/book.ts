// src/app/core/book.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({ 
  providedIn: 'root'
})

// fetches book data from db.json using HttpClient
export class BookService {
  private apiUrl = 'http://localhost:3000/books';

  // constructor injects HttpClient for making HTTP requests
  constructor(private http: HttpClient) {}

  // get books and return an Observable book array
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  // get 1 book by it id and return an Observable book
  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  // add a new book to the db and return an Observable book
  postBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}`, book);
  }

  // update a book by its id and return an Observable book
  putBook(id: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  // delete a book by its id
  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

