function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp)=>resp.json())
  .then((json)=>renderBooks(json));
  // To pass the tests, don't forget to return your fetch
}

function renderBooks(books) {
  const main = document.querySelector('main');
  let sum = 0;
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    sum += book.numberOfPages;
    console.log(sum);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
