// src/app/models/book.model.ts


export interface Book {
  id?: string; // string because db.json uses string ids
  title: string;
  author: string;
  description: string;
  genre?: string; // optional because not all books have a genre
  year: number;
  favorite?: boolean; // optional because not all books are marked as favourite
  
  // might add images later if time allows 
}
