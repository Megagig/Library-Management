class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = []; // Initialize with an empty array
  }
}

export default User;
