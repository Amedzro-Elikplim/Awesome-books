function Book(title, author) {
  this.title = title;
  this.author = author;
}

const data = localStorage.getItem('bookInfo');
const arr = data ? JSON.parse(data) : [];

function saveBook(bookInfo) {
  arr.push(bookInfo);
  localStorage.setItem('bookInfo', JSON.stringify(arr));
}

export {
  Book,
  saveBook,
};