import { Book, saveBook } from './Book.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const add = document.getElementById('add');

add.addEventListener('click', (e) => {
  e.preventDefault();
  const Title = title.value;
  const Author = author.value;

  if (Title === '' || Author === '') {
    alert('please fill all fields');
    return;
  }

  const book = new Book(Title, Author);
  saveBook(book);
});
