// src/app/features/books-list/books-list.ts

import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../core/book'; 
import { Book } from '../../models/book.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books-list.html',
  styleUrls: ['./books-list.scss']
})

// fetch books from the service and handle errors
export class BooksListComponent implements OnInit {
  private bookService = inject(BookService);
  books = signal<Book[]>([]);
  loading = signal(true);
  error = signal('');
  searchTerm = signal('');

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

    filteredBooks = computed(() => {
      const term = this.searchTerm().toLowerCase().trim();

      if (!term) {
        return this.books();
      }

      return this.books().filter(book => 
        book.title.toLowerCase().includes(term) || 
        book.author.toLowerCase().includes(term) ||
        book.genre?.toLowerCase().includes(term)
      );
    });

    toggleFavorite(book: Book): void {
      if (!book.id) return;

      const newFavorite = !(book.favorite ?? false);

    // update UI immediately
    book.favorite = newFavorite;

    const updatedBook: Book = {
      ...book,
      favorite: newFavorite
    };

    this.bookService.putBook(String(book.id), updatedBook).subscribe({
      error: (err) => {
        console.error(err);
        // revert UI if server fails
        book.favorite = !newFavorite;
      }
    });
  }

}