// Basic library functions
const library = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

function addBook(title, author, numPages, read) {
  const book = new Book(title, author, numPages, read);
  library.push(book);
}




// Rendering library
