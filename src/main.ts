import Library from './library';
import Book from './Book';
import User from './User';

const library = new Library();

// Adding books to the library
const book1 = new Book('1984', 'George Orwell', '1234567890');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '1234567891');
library.addBook(book1.title, book1.author, book1.isbn, book1.isAvailable);
library.addBook(book2.title, book2.author, book2.isbn, book2.isAvailable);

console.log('Books in library:', library.searchBook(''));

// Adding users to the library
const user1 = new User('Alice', '1');
const user2 = new User('Bob', '2');
library.addUser(user1.name, user1.id);
library.addUser(user2.name, user2.id);

console.log('Users in library:', library.searchUser(''));

// Borrowing a book
console.log('Borrowing book 1984 by Alice');
library.borrowBook(user1.id, book1.isbn);

console.log('Books in library after borrowing:', library.searchBook(''));

// Checking if a book is available
console.log('Is "1984" available?', library.isBookAvailable(book1.isbn));

// Returning a book
console.log('Returning book 1984 by Alice');
library.returnBook(user1.id, book1.isbn);

console.log('Books in library after returning:', library.searchBook(''));
console.log('Is "1984" available?', library.isBookAvailable(book1.isbn));

// Searching for a book by title
console.log(
  'Search for books with "1984" in title:',
  library.searchBook('1984')
);

// Searching for a user by name
console.log(
  'Search for users with "Alice" in name:',
  library.searchUser('Alice')
);

// Removing a book
console.log('Removing book To Kill a Mockingbird');
library.removeBook(book2.isbn);

console.log('Books in library after removing:', library.searchBook(''));

// Removing a user
console.log('Removing user Bob');
library.removeUser(user2.id);

console.log('Users in library after removing:', library.searchUser(''));
