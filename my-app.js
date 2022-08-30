const container = document.querySelector('.container');

document.getElementById('form').addEventListener('submit', addBook);
document.getElementById('resetBooks').addEventListener('click', resetCards);
container.addEventListener('click', changeBook);

let myLibrary = [];

// function with variable collected data from input
function getBookFromInput(book) {
    let title = document.getElementById('formTitle').value;
    let author = document.getElementById('formAuthor').value;
    let genre = document.getElementById('formGenre').value;
    return new Book(title, author, genre);
}

// function add books to the library
function addBook(book) {
    let newBook = getBookFromInput(book);
    addBookToLibrary(newBook);
    displayBook()
    closeForm();
    book.preventDefault();
    document.getElementById('form').reset();
}

// function reseting cards
function resetCards() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    myLibrary = [];
}

// function changeBook


// add constructor
class Book{
    constructor(
        title = "Unknown",
        author = "Unknown",
        genre = "Unknown",
    ) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

// function creating card with books
function displayBooks() {
    makeCard(myLibrary[myLibrary.length - 1]);
}

// function to create new book cards

function makeCard(bookToAdd)
{
    let card = document.createElement('div');
    let title = document.createElement('h1');
    let author = document.createElement('h2');
    let genre = document.createElement('p');
    let removeButton = document.createElement('BUTTON');
    
   
   
    removeButton.className = 'removeButton';
    removeButton.innerText = 'Remove Book';
    removeButton.setAttribute("data-index", myLibrary.indexOf(bookToAdd));
    card.classList.add('card');

    title.textContent = bookToAdd.title;
    author.textContent = bookToAdd.author;
    genre.textContent = `${bookToAdd.genre} genre`;
    

    card.append(title);
    card.append(author);
    card.append(genre);
    card.append(removeButton);
    card.setAttribute("data-index", myLibrary.indexOf(bookToAdd));
    container.append(card);
}

// open and close form window

function openForm() {
    document.getElementById("bookForm").style.display = "block";
}

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
    
}