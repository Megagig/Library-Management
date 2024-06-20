import Book from './Book';
import User from './User';

/** Manages books and users in the library */
class Library {
  books: Book[];
  users: User[];

  constructor() {
    this.books = [];
    this.users = [];
  }

  /**
   * Adds a book to the library
   * @param title - The title of the book
   * @param author - The author of the book
   * @param isbn - The ISBN of the book
   * @param isAvailable - The availability status of the book
   */
  addBook(
    title: string,
    author: string,
    isbn: string,
    isAvailable: boolean = true
  ): void {
    const book = new Book(title, author, isbn, isAvailable);
    this.books.push(book);
  }

  /**
   * Removes a book from the library by ISBN
   * @param isbn - The ISBN of the book to remove
   */
  removeBook(isbn: string): void {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  /**
   * Searches for books in the library by query
   * @param query - The search query (title, author, or ISBN)
   * @returns An array of books that match the query
   */
  searchBook(query: string): Book[] {
    return this.books.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(query.toLowerCase());
      const authorMatch = book.author
        .toLowerCase()
        .includes(query.toLowerCase());
      const isbnMatch = book.isbn.includes(query);
      return titleMatch || authorMatch || isbnMatch;
    });
  }

  /**
   * Adds a user to the library
   * @param name - The name of the user
   * @param id - The ID of the user
   */
  addUser(name: string, id: string): void {
    const user = new User(name, id);
    this.users.push(user);
  }

  /**
   * Removes a user from the library by ID
   * @param id - The ID of the user to remove
   */
  removeUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  /**
   * Searches for users in the library by query
   * @param query - The search query (name or ID)
   * @returns An array of users that match the query
   */
  searchUser(query: string): User[] {
    return this.users.filter((user) => {
      const nameMatch = user.name.toLowerCase().includes(query.toLowerCase());
      const idMatch = user.id.includes(query);
      return nameMatch || idMatch;
    });
  }

  /**
   * Allows a user to borrow a book by ISBN
   * @param userId - The ID of the user borrowing the book
   * @param isbn - The ISBN of the book to borrow
   */
  borrowBook(userId: string, isbn: string): void {
    const user = this.users.find((user) => user.id === userId);
    const book = this.books.find((book) => book.isbn === isbn);
    if (book && book.isAvailable && user) {
      // Ensure user is not undefined
      book.isAvailable = false;
      user.borrowedBooks.push(book);
    }
  }

  /**
   * Allows a user to return a borrowed book by ISBN
   * @param userId - The ID of the user returning the book
   * @param isbn - The ISBN of the book to return
   */
  returnBook(userId: string, isbn: string): void {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      // Ensure user is not undefined
      const book = user.borrowedBooks.find((book) => book.isbn === isbn);
      if (book) {
        book.isAvailable = true;
        user.borrowedBooks = user.borrowedBooks.filter((b) => b.isbn !== isbn);
      }
    }
  }

  /**
   * Checks if a book is available by ISBN
   * @param isbn - The ISBN of the book to check
   * @returns True if the book is available, otherwise false
   */
  isBookAvailable(isbn: string): boolean {
    const book = this.books.find((book) => book.isbn === isbn);
    return book ? book.isAvailable : false;
  }
}

export default Library;
