const data = window.localStorage.getItem('bookInfo');
const arr = data ? JSON.parse(data) : [];
const booksDiv = document.querySelector('.books-div');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function SaveBook(bookInfo) {
  arr.push(bookInfo);
  window.localStorage.setItem('bookInfo', JSON.stringify(arr));
}

function RemoveAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function RemoveBook(title) {
  let books = JSON.parse(window.localStorage.getItem('bookInfo'));
  const index = books.findIndex((item) => item.title === title);

  books.splice(index, 1);
  books = JSON.stringify(books);
  window.localStorage.setItem('bookInfo', books);

  RemoveAllChildNodes(booksDiv);
  // eslint-disable-next-line no-use-before-define
  showAllBooks();
}

function BookTemplate(bookInfo) {
  const { title, author } = bookInfo;
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const button = document.createElement('button');
  const div = document.createElement('div');

  ul.className = 'list';
  li1.className = 'book-title';
  li2.className = 'book-author';
  div.className = 'list-div';
  button.className = 'remove-button';

  li1.innerHTML = `"${title}" by`;
  li2.innerHTML = author;
  button.innerHTML = 'remove';

  div.append(li1, li2);
  ul.append(div, button);

  button.addEventListener('click', (e) => {
    e.preventDefault();
    RemoveBook(title);
  });

  return ul;
}

function ShowBook(bookInfo) {
  booksDiv.appendChild(BookTemplate(bookInfo));
}

function showAllBooks() {
  const data = window.localStorage.getItem('bookInfo');
  const arr = data ? JSON.parse(data) : [];

  arr.forEach((element) => {
    ShowBook(element);
  });
}

export {
  Book,
  SaveBook,
  ShowBook,
  showAllBooks,
};
