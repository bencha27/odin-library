// Basic library functions
let library = [];

let id = 0;

function Book(title, author, numPages, status) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.status = status;
  this.id = id;
}

Book.prototype.changeStatus = function (status) {
  this.status = status;
}

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
  selectEl.dataset.id = book.id;
  const optionEl1 = document.createElement("option");
  optionEl1.textContent = "Completed";
  const optionEl2 = document.createElement("option");
  optionEl2.textContent = "In progress";
  const optionEl3 = document.createElement("option");
  optionEl3.textContent = "Paused";
  const optionEl4 = document.createElement("option");
  optionEl4.textContent = "Not started";
  switch (book.status) {
    case "Completed": 
      optionEl1.setAttribute("selected", "");
      break;
    case "In progress": 
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

  selectEl.addEventListener("input", handleStatusChange);

  const buttonEl = document.createElement("button");
  buttonEl.setAttribute("type", "button");
  buttonEl.classList.add("remove-book-button");
  const iconEl = document.createElement("span");
  iconEl.classList.add("material-symbols-outlined");
  iconEl.textContent = "delete";
  iconEl.dataset.id = book.id;
  buttonEl.appendChild(iconEl);
  bookEl.appendChild(buttonEl);

  iconEl.addEventListener("click", handleRemoveButtonClick);

  mainEl.appendChild(bookEl);
}

function handleRemoveButtonClick(event) {
  const id = event.target.dataset.id;
  const card = event.target.parentNode.parentNode;
  mainEl.removeChild(card);
  const filtered = library.filter((book) => book.id != id);
  library = filtered;
}

function handleStatusChange(event) {
  const id = event.target.dataset.id;
  const status = event.target.value;
  const index = library.findIndex((book) => book.id == id);
  library[index].changeStatus(status);
  console.log(library);
}

function addBook(title, author, numPages, status) {
  const book = new Book(title, author, numPages, status);
  id++;
  library.push(book);
  renderBook(book);
}


// Create demo books
addBook("Seeing and Savoring Jesus Christ", "John Piper", 128, "Completed");
addBook("Desiring God", "John Piper", 368, "In progress");
addBook("In Defense of Food", "Michael Pollan", 205, "Completed");
addBook("Feel-Good Productivity", "Ali Abdaal", 304, "In progress");
addBook("Systematic Theology", "Wayne Grudem", 1616, "In progress");
addBook("The Holiness of God", "R.C. Sproul", 240, "Not started");




// Sidebar functions
// Add book button
const addButton = document.querySelector("#add-button");
const addButtonSection = document.querySelector(".add-button-section");
const formSection = document.querySelector(".add-form-section");
addButton.addEventListener("click", handleAddButtonClick);

function handleAddButtonClick() {
  addButtonSection.style.display = "none";
  formSection.style.display = "block";
}


// Form submit button
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", handleSubmitButtonClick);
function handleSubmitButtonClick(event) {
  if (formElements.title.value === "") return;
  event.preventDefault();

  const title = formElements.title.value;
  const author = formElements.author.value;
  const pages = formElements.pages.value;
  const status = formElements.status.value;
  addBook(title, author, pages, status);

  addButtonSection.style.display = "block";
  formSection.style.display = "none";
  resetForm();
}

const formElements = document.forms["add-book"];
function resetForm() {
  formElements.title.value = "";
  formElements.author.value = "";
  formElements.pages.value = "";
  formElements.status.value = "Completed";
}


// Form cancel button
const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", handleCancelButtonClick);
function handleCancelButtonClick() {
  addButtonSection.style.display = "block";
  formSection.style.display = "none";
  resetForm();
}