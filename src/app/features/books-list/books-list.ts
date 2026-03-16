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
  showFavoritesOnly = signal(false);

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

      // if search fails
      if (!term) {
        // copy the books array for extra safety and so it can't be mutated by accident
        return [...this.books()]
        // show favourites only, if toggled on
        .filter(book => !this.showFavoritesOnly() || book.favorite)
        // sort alphabetically by title
        .sort((a, b) => a.title.localeCompare(b.title));
      }

      // if search suceeds
      return this.books()
        .filter(book => 
          // show favourites only, if toggled on
        (!this.showFavoritesOnly() || book.favorite) &&
          (
            book.title.toLowerCase().includes(term) || 
            book.author.toLowerCase().includes(term) ||
            book.genre?.toLowerCase().includes(term)
          )
        )
        // sort alphabetically by title
      .sort((a, b) => a.title.localeCompare(b.title));
    });

    // toggle function for favourites
    toggleFavorite(book: Book): void {
      // make sure the book exists
      if (!book.id) return;

      // toggle the status of the book
      const newFavorite = !(book.favorite ?? false);

    // update UI immediately
    book.favorite = newFavorite;

    // create a new book object with the updated status to send to db.json
    const updatedBook: Book = {
      ...book,
      favorite: newFavorite
    };

    // update the book in db.json and take care of errors just in case
    this.bookService.putBook(String(book.id), updatedBook).subscribe({
      error: (err) => {
        console.error(err);
        // revert UI if server fails
        book.favorite = !newFavorite;
      }
    });
  }

}