import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books = [
    {name : 'Adventures of Sherlock Holmes',author : 'Sir Arthur Conan Doyle'},
    {name : 'Adventures of Tom Sawyer, The', author : 'Mark Twain'},
    {name : 'Ain-i-Akbari',author : 'Abul Fazal'},
    {name : 'An idealist view of life',author : 'Dr. S. Radhakrishnan'},
    {name : 'Madame Bovary',author : 'Gustave Flaubert'},
    {name : 'Arabian Nights',author : 'Herman Melville'},
    {name : 'An idealist view of life',author : 'Dr. S. Radhakrishnan'},
    {name : 'Madame Bovary',author : 'Gustave Flaubert'},
    {name : 'Arabian Nights',author : 'Herman Melville'},
    ];
      constructor() { }
    
      getAllBooks()
      {
        return this.books;
      }
      addBook(name,author)
      {
        this.books.push({name:name,author:author});
      }
      deleteBook(name) {
        this.books = this.books.filter(e => {
          return e.name !== name;
        });
      }
}
