// import {
//   Book,
//   SaveBook,
//   ShowBook,
//   showAllBooks,
// } from './book.js';

import Book from './book.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const add = document.getElementById('add');
const book = new Book();
// showAllBooks();

add.addEventListener('click', (e) => {
  e.preventDefault();
  const Title = title.value;
  const Author = author.value;

  const newBook = {
    title: Title,
    author: Author,
  };

  if (Title === '' || Author === '') {
    alert('please fill all fields');
    return;
  }

  // const book = new Book(Title, Author);
  // SaveBook(book);
  book.SaveBook(newBook);
  book.ShowBook(book);

  title.value = '';
  author.value = '';
});
