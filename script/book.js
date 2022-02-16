const data = localStorage.getItem('bookInfo');
const arr = data ? JSON.parse(data) : [];
const booksDiv = document.querySelector('.books-div');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function saveBook(bookInfo) {
  arr.push(bookInfo);
  localStorage.setItem('bookInfo', JSON.stringify(arr));
}

function bookTemplate(bookInfo) {
  const { title, author } = bookInfo;
  const template = `
     <div>
         <ul>
             <li>${title}</li>
             <li>${author}</li>
             <li><button>Remove</button></li>
         </ul>
      </div>
  `;
  return template;
}

function showBook(bookInfo) {
  booksDiv.innerHTML += bookTemplate(bookInfo);
}

export { Book, saveBook, showBook };
