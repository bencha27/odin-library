// Basic library functions
const library = [];

function Book(title, author, numPages, status) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.status = status;
}

function addBook(title, author, numPages, status) {
  const book = new Book(title, author, numPages, status);
  library.push(book);
}

// Create demo books
addBook("Seeing and Savoring Jesus Christ", "John Piper", 128, "Read");
addBook("Desiring God", "John Piper", 368, "Reading");
addBook("In Defense of Food", "Michael Pollan", 205, "Reading");
addBook("Feel-Good Productivity", "Ali Abdaal", 304, "Reading");
addBook("Systematic Theology", "Wayne Grudem", 1616, "Reading");
addBook("The Holiness of God", "R.C. Sproul", 240, "Not started");




// Rendering library
const mainEl = document.querySelector(".main");

function renderBook(book) {
  const bookEl = document.createElement("div");
  bookEl.classList.add("book-card");
  
  const titleEl = document.createElement("h2");
  titleEl.classList.add("book-title");
  titleEl.textContent = book.title;
  bookEl.appendChild(titleEl);
  
  const infoEl = document.createElement("ul");
  infoEl.classList.add("book-info");
  bookEl.appendChild(infoEl);
  
  const authorEl = document.createElement("li");
  authorEl.textContent = book.author;
  infoEl.appendChild(authorEl);

  const pagesEl = document.createElement("li");
  pagesEl.textContent = `${book.numPages} pages`;
  infoEl.appendChild(pagesEl);

  const statusEl = document.createElement("li");
  const selectEl = document.createElement("select");
  selectEl.classList.add("book-status");
  const optionEl1 = document.createElement("option");
  optionEl1.textContent = "Read";
  const optionEl2 = document.createElement("option");
  optionEl2.textContent = "Reading";
  const optionEl3 = document.createElement("option");
  optionEl3.textContent = "Paused";
  const optionEl4 = document.createElement("option");
  optionEl4.textContent = "Not started";
  switch (book.status) {
    case "Read": 
      optionEl1.setAttribute("selected", "");
      break;
    case "Reading": 
      optionEl2.setAttribute("selected", "");
      break;
    case "Paused": 
      optionEl3.setAttribute("selected", "");
      break;
    default: 
      optionEl4.setAttribute("selected", "");
  }
  selectEl.appendChild(optionEl1);
  selectEl.appendChild(optionEl2);
  selectEl.appendChild(optionEl3);
  selectEl.appendChild(optionEl4);
  statusEl.appendChild(selectEl);
  infoEl.appendChild(statusEl);

  const buttonEl = document.createElement("button");
  buttonEl.setAttribute("type", "button");
  buttonEl.classList.add("remove-book-button");
  const iconEl = document.createElement("span");
  iconEl.classList.add("material-symbols-outlined");
  iconEl.textContent = "delete";
  buttonEl.appendChild(iconEl);
  bookEl.appendChild(buttonEl);

  mainEl.appendChild(bookEl);
}

library.forEach(renderBook);