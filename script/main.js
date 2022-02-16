import Book from './book.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const add = document.getElementById('add');

add.addEventListener('click', (e) => {
  e.preventDefault();

  const booKtitle = title.value;
  const authorName = author.value;

  const book = new Book(booKtitle, authorName);
 
});