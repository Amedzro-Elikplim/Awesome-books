// const data = window.localStorage.getItem('bookInfo');
// const arr = data ? JSON.parse(data) : [];
// const booksDiv = document.querySelector('.books-div');

class Book {
  // data = window.localStorage.getItem('bookInfo');
  // arr = data ? JSON.parse(data) : [];
  // booksDiv = document.querySelector('.books-div');
  contructor() {
    this.data = 0;
    this.temp = 0;
  }

  // loadBookInfo() {
  //   const data = window.localStorage.getItem('bookInfo');
  //   const arr = data ? JSON.parse(data) : [];
  //   const booksDiv = document.querySelector('.books-div');
  // }

  SaveBook(book) {
    this.data = window.localStorage.getItem('bookInfo');
    const arr = this.data ? JSON.parse(this.data) : [];
    arr.push(book);
    window.localStorage.setItem('bookInfo', JSON.stringify(arr));
  }

  // function SaveBook(bookInfo) {
  //   arr.push(bookInfo);
  //   window.localStorage.setItem('bookInfo', JSON.stringify(arr));
  // }

  // function RemoveBook(title) {
  //   let books = JSON.parse(window.localStorage.getItem('bookInfo'));
  //   const index = books.findIndex((item) => item.title === title);

  //   arr.splice(index, 1);
  //   books.splice(index, 1);

  //   books = JSON.stringify(books);
  //   window.localStorage.setItem('bookInfo', books);

  //   if (booksDiv.hasChildNodes()) {
  //     booksDiv.removeChild(booksDiv.children[index]);
  //   }
  // }

  BookTemplate(bookInfo) {
    this.temp = 0;
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
      // RemoveBook(title);
    });

    return ul;
  }

  ShowBook(bookInfo) {
    const booksDiv = document.querySelector('.books-div');
    booksDiv.appendChild(this.BookTemplate(bookInfo));
  }

  // function showAllBooks() {
  //   const data = window.localStorage.getItem('bookInfo');
  //   const arr = data ? JSON.parse(data) : [];

  //   arr.forEach((element) => {
  //     ShowBook(element);
  //   });
  // }

  // export {
  //   Book,
  //   // showAllBooks,
  //   // SaveBook,
  //   // ShowBook,
  // };
}
export default Book;