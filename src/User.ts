import Book from './Book.js';

/** Represents a user of the library */
class User {
  name: string;
  id: string;
  borrowedBooks: Book[];

  /**
   * @param name - The name of the user
   * @param id - The ID of the user
   */
  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = []; // Initialize with an empty array
  }
}

export default User;
