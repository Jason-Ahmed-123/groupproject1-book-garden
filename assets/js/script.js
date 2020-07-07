// Script file for backend codes and API stuff

// GoogleBooks Api Work

var authorInput = document.querySelector("#AuthorInput");
var titleInput = document.getElementById("TitleInput");
var genreInput = document.querySelector("#GenreInput");

/* let searchOptions = [authorInput.value, titleInput.value, genreInput.value]
let searchFlags = []
searchOptions.forEach(type => {
    if (type.length >= 0) {
        searchFlags.push(type)
    }
}) */

// -------Function to fetch Book Information Start-------

var getBooks = function (titleResponse) {
  var bookImg;
  // Variable for GoogleBooks API
  var googleApiUrl =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    titleResponse +
    "&key=AIzaSyCRSXdaLKLF0hPkiN03bDL9-swkrelDh8w";

  // ------- Fetching GoogleBooks API Start ------- (2)
  fetch(googleApiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        data.items.forEach((book) => {
          let title = book.volumeInfo.title;
          let author = book.volumeInfo.authors;
          bookImg = book.volumeInfo.imageLinks.thumbnail;

          let newBook = {
            title: title,
            author: author,
            image: bookImg,
          };
          console.log(newBook);
        });

        //displayBook(data,titleResponse);
        //newbooks[Matth.floor(Math.random * newbooks.length)]
      });
    } else {
      alert("Error: ");
    }
  });

  console.log(googleApiUrl);
};
// -------Function to fetch Book Information End-------

console.log(titleInput);

//var titleInput = document.querySelector("#booksCrit")

console.log(formSubmitHandler);

//titleInput = addEventListener("submit", formSubmitHandler)
// get the button
let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", (event) => {
  let searchTerm = titleInput.value;
  event.preventDefault();
  if (searchTerm.includes(" ")) {
    searchTerm = searchTerm.split(" ").join("+");
    console.log(searchTerm);
  }

  // call on the getBooks to make API request
  getBooks(searchTerm);
});

function formSubmitHandler(event) {
  event.preventDefault();

  if (titleInput.value) {
    //getBookInfo(titleInput.value);
    //titleInput.value="";
  } else {
    //alert("Please enter a book title");
  }
  console.log(event);
}

for (var i = 0; i < data.list.length; i = 0) {
  var bookList = data.list[i];

  bookContainer.appendChild(displayBooks);
}

getBooks();
