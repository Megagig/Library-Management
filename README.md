The goal of this project is to create a simple library management system using ES6 classes and advanced ES6 features. The system will allow adding, removing, and searching for books, as well as managing users and their borrowed books.

 

 Requirements

1. Book Management

    - Add a book

    - Remove a book

    - Search for a book by title, author, or ISBN

 

2. User Management

    - Add a user

    - Remove a user

    - Search for a user by name or ID

 

3. Borrowing System

    - Allow a user to borrow a book

    - Allow a user to return a book

    - Check if a book is available

 

 Instructions

1. Setup the Project

    - Create a new JavaScript file (e.g., `library.js`).

 

2. Create Classes

    - Create a `Book` class with properties such as `title`, `author`, `isbn`, and `isAvailable`.

    - Create a `User` class with properties such as `name`, `id`, and `borrowedBooks` (an array to store borrowed books).

    - Create a `Library` class to manage the books and users. This class should have methods to add, remove, and search for books and users, as well as to borrow and return books.

 

3. Implement Methods

    - Implement methods in the `Library` class to:

        - Add a book: `addBook(book)`

        - Remove a book: `removeBook(isbn)`

        - Search for a book: `searchBook(query)`

        - Add a user: `addUser(user)`

        - Remove a user: `removeUser(id)`

        - Search for a user: `searchUser(query)`

        - Borrow a book: `borrowBook(userId, isbn)`

        - Return a book: `returnBook(userId, isbn)`

        - Check if a book is available: `isBookAvailable(isbn)`

 

4. Use ES6 Features

    - Use ES6 classes for creating `Book`, `User`, and `Library` classes.

    - Use ES6 features such as template literals, destructuring, and spread/rest operators where appropriate.

    - Use ES6 modules to split the classes into separate files and import them as needed.
