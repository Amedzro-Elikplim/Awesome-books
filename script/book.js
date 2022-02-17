const data = localStorage.getItem('bookInfo');
const arr = data ? JSON.parse(data) : [];
const booksDiv = document.querySelector('.books-div');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function SaveBook(bookInfo) {
  arr.push(bookInfo);
  localStorage.setItem('bookInfo', JSON.stringify(arr));
}

function RemoveBook(title) {
  let books = JSON.parse(localStorage.getItem('bookInfo'));
  const index = books.findIndex((item) => item.title === title);

  books.splice(index, 1);
  books = JSON.stringify(books);

  localStorage.setItem('bookInfo', books);
}

function BookTemplate(bookInfo) {
  const { title, author } = bookInfo;
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const button = document.createElement('button');

  li1.innerHTML = title;
  li2.innerHTML = author;
  button.innerHTML = 'Remove';
  ul.append(li1, li2, button);

  button.addEventListener('click', (e) => {
    e.preventDefault();
    RemoveBook(title);
  });

  return ul;
}

function ShowBook(bookInfo) {
  booksDiv.appendChild(BookTemplate(bookInfo));
}

export {
  Book,
  SaveBook,
  ShowBook,
  RemoveBook,
};
