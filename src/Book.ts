/** Represents a book in the library */
class Book {
  title: string;
  author: string;
  isbn: string;
  isAvailable: boolean;

  /**
   * @param title - The title of the book
   * @param author - The author of the book
   * @param isbn - The ISBN of the book
   * @param isAvailable - The availability status of the book
   */
  constructor(
    title: string,
    author: string,
    isbn: string,
    isAvailable: boolean = true
  ) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = isAvailable; //initially, every book is available
  }
}

export default Book;
