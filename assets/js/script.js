// Script file for backend codes and API stuff

// GoogleBooks Api Work

var titleInput = document.getElementById("TitleInput");

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
          console.log(newBook);
          // HTML edit in javascript
          var displayBooks = document.querySelector(".bookResults");

          var card = document.createElement("div");
          card.classList.add("card");
          displayBooks.appendChild(card);

          var cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
          card.appendChild(cardBody);

          var tagH = document.createElement("h1");
          tagH.textContent = title;
          cardBody.appendChild(tagH);
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
let searchBtn = document.querySelector("#searchTitle");
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

//getBooks();
