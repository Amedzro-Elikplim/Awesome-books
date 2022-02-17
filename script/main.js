import {
  Book,
  SaveBook,
  ShowBook,
  showAllBooks,
// eslint-disable-next-line import/extensions
} from './Book.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const add = document.getElementById('add');

showAllBooks();

add.addEventListener('click', (e) => {
  e.preventDefault();
  const Title = title.value;
  const Author = author.value;

  if (Title === '' || Author === '') {
    // eslint-disable-next-line no-alert
    alert('please fill all fields');
    return;
  }

  const book = new Book(Title, Author);
  SaveBook(book);
  ShowBook(book);

  title.value = '';
  author.value = '';
});
