import Book from './book.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const add = document.getElementById('add');

const book = new Book();
book.showAllBooks();

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

  book.SaveBook(newBook);
  book.ShowBook(newBook);

  title.value = '';
  author.value = '';
});
