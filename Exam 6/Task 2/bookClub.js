class BookClub {
  constructor(libraryName) {
    this.libraryName = libraryName;
    this.books = new Map();
    this.members = [];
  }

  addBook(title, author) {
    if (typeof title !== "string") {
      throw TypeError("Type of title should be string!");
    }

    if (typeof author !== "string") {
      throw TypeError("Type of author should be string!");
    }

    if (this.books.has(title)) {
      return `The book "${title}" by ${author} is already in ${this.libraryName} library.`;
    } else {
      this.books.set(title, author);
      return `The book "${title}" by ${author} has been added to ${this.libraryName} library.`;
    }
  }

  addMember(memberName) {
    if (typeof memberName !== "string") {
      throw TypeError("Type of memberName should be string!");
    }

    if (this.members.includes(memberName)) {
      return `Member ${memberName} is already a part of the book club.`;
    } else {
      this.members.push(memberName);
      return `Member ${memberName} has been joined to the book club.`;
    }
  }

  assignBookToMember(memberName, bookTitle) {
    if (!this.members.includes(memberName)) {
      throw Error(`Member ${memberName} not found.`);
    }

    if (!this.books.has(bookTitle)) {
      throw Error(`Book "${bookTitle}" not found.`);
    }

    let author = this.books.get(bookTitle);
    this.books.delete(bookTitle);

    return `Member ${memberName} has been assigned the book "${bookTitle}" by ${author}.`;
  }

  generateReadingReport() {
    let result = [];

    if (this.members.length === 0) {
      return `No members in the book club.`;
    }

    if (this.books.size === 0) {
      return `No available books in the library.`;
    }

    result.push(`Available Books in ${this.libraryName} library:`);

    for (const [key, value] of this.books) {
      result.push(`"${key}" by ${value}`);
    }

    return result.join("\n");
  }
}

const myBookClub = new BookClub("The Bookaholics");
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));
