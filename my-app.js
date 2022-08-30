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

// open and close form window

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    
}