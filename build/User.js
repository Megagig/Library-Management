/** Represents a user of the library */
class User {
    /**
     * @param name - The name of the user
     * @param id - The ID of the user
     */
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = []; // Initialize with an empty array
    }
}
export default User;
