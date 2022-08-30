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