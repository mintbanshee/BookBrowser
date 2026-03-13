// src/app/models/book.model.ts


export interface Book {
  id?: number;
  title: string;
  author: string;
  description: string;
  genre?: string;
  year: number;
  // might add images later if time allows 
}
