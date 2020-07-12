// Script file for backend codes and API stuff

// GoogleBooks Api Work

var titleInput = document.getElementById("TitleInput");
var genreInput = document.getElementById("GenreInput");

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
        data.items = data.items.slice(0, 1);
        data.items.forEach((book) => {
          let title = book.volumeInfo.title;
          let author = book.volumeInfo.authors;
          bookImg = book.volumeInfo.imageLinks.thumbnail;

          let newBook = {
            title: title,
            author: author,
            image: bookImg,
          };
          // HTML edit in javascript
          var displayBooks = document.querySelector("#bookResults");

          var card = document.createElement("div");
          card.classList.add("card");
          displayBooks.appendChild(card);

          var cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
          card.appendChild(cardBody);

          var tagH = document.createElement("img");
          tagH.src = bookImg;
          cardBody.appendChild(tagH);
        });
      });
    } 
  });
};
// -------Function to fetch Book Information End-------

// get the button
let searchBtn = document.querySelector("#searchTitle");
searchBtn.addEventListener("click", (event) => {
 
    let searchTerm = titleInput.value;
  event.preventDefault();
  if (searchTerm.includes(" ")) {
    searchTerm = searchTerm.split(" ").join("+");
  }

  // call on the getBooks to make API request
  getBooks(searchTerm);
});

function formSubmitHandler(event) {
  event.preventDefault();
}

