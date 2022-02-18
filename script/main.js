import {
  Book,
  SaveBook,
  ShowBook,
  showAllBooks,
} from './book.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const add = document.getElementById('add');

showAllBooks();

add.addEventListener('click', (e) => {
  e.preventDefault();
  const Title = title.value;
  const Author = author.value;

  if (Title === '' || Author === '') {
    alert('please fill all fields');
    return;
  }

  const book = new Book(Title, Author);
  SaveBook(book);
  ShowBook(book);

  title.value = '';
  author.value = '';
});
