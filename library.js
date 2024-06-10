// Purpose: Library class to manage books and users
import Book from './Book.js';
import User from './User.js';

class Library {
  constructor() {
    this.books = []; // Array to store books
    this.users = []; // Array to store users
  }

  /* Add a book to the library */
  addBook(title, author, isbn, isAvailable = true) {
    // Assuming the parameters are the properties of a book
    const book = new Book(title, author, isbn, isAvailable);
    this.books.push(book);
  }

  removeBook(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  searchBook(query) {
    return this.books.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(query.toLowerCase());
      const authorMatch = book.author
        .toLowerCase()
        .includes(query.toLowerCase());
      const isbnMatch = book.isbn.includes(query);
      return titleMatch || authorMatch || isbnMatch;
    });
  }

  addUser(name, id) {
    const user = new User(name, id);
    this.users.push(user);
  }
  removeUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  searchUser(query) {
    return this.users.filter((user) => {
      const nameMatch = user.name.toLowerCase().includes(query.toLowerCase());
      const idMatch = user.id.includes(query);
      return nameMatch || idMatch;
    });
  }

  borrowBook(userId, isbn) {
    const user = this.users.find((user) => user.id === userId);
    const book = this.books.find((book) => book.isbn === isbn);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      user.borrowedBooks.push(book);
    }
  }

  returnBook(userId, isbn) {
    const user = this.users.find((user) => user.id === userId);
    const book = user.borrowedBooks.find((book) => book.isbn === isbn);
    if (book) {
      book.isAvailable = true;
      user.borrowedBooks = user.borrowedBooks.filter((b) => b.isbn !== isbn);
    }
  }

  isBookAvailable(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    return book ? book.isAvailable : false;
  }
}

export default Library;
