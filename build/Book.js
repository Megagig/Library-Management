"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Represents a book in the library */
class Book {
    /**
     * @param title - The title of the book
     * @param author - The author of the book
     * @param isbn - The ISBN of the book
     * @param isAvailable - The availability status of the book
     */
    constructor(title, author, isbn, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = isAvailable; //initially, every book is available
    }
}
exports.default = Book;
