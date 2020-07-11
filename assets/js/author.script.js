//var titleInput = document.querySelector("#TitleInput");
//var genreInput = document.querySelecetor("#GenreInput");
//var displayBooks = document.querySelector("bookSearchResults")
var displayAuthorBooks = document.querySelector(".bookResults");
var AuthorInput = document.getElementById(AuthorInput)

var getAuthorBooks = function(authorInput) {
    // format the github api url
var openLibraryApiUrl = "http://openlibrary.org/search.json?author=" + authorInput;
    console.log(openLibraryApiUrl)
    fetch(openLibraryApiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {

          response.json().then(function(data) {
            console.log(data)
            //data.items = data.items.slice(0, 1);
            data.items.forEach((search) => {
            //displayBooks(data.items, authorInput)
              let author = search.docs.author_name;
              let title = search.docs.title;
              bookImg = search.docs.cover_i;

              let newBook = {
                title: title,
                author: author, 
                image: bookImg,
              };
              console.log(newBook)
            
var displayAuthorBooks = document.querySelector(".bookResults");
  var card = document.createElement("div");
    card.classList.add("card");
      displayAuthorBooks.appendChild(card);

  var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
      card.appendChild(card-Body);

  var tagH = document.createElement("h1");
    tagH.textContent = author;
      cardBody.appendChild(tagH);
  });
        displayAuthorBook(data,authorInput);
        newbooks[Math.floor(Math.random * newbooks.length)]
      });
    } else {
      alert("Error: ");
    }
  });

  console.log(openLibraryApiUrl);
};

//create form variable for form submit handler//


//search btn//

let searchAuthor = document.querySelector('#searchAuthor')
searchAuthor.addEventListener("click", (event) => {
  var authorInput = document.getElementById("AuthorInput");
    let authorSearchTerm = authorInput.value
    event.preventDefault();
    if (authorSearchTerm.includes(" ")) {
        authorSearchTerm = authorSearchTerm.split(" ").join("+")
        console.log(authorSearchTerm)
    }

    // call on the getBooks to make API request
    getBooks(authorInput)
    console.log(authorInput)
    
})
//end btn//

var formSubmitHandler = function(event) {
    event.preventDefault();
    // var for form submit (replace username)//
      
    if (authorInput.value) {
        getBookInfo(authorInput.value);
        authorInput.value = "";
    } else {
    alert("Please enter author");
    }
        console.log(event);
    }; 

  console.log(formSubmitHandler);


var someVariable = "World"

console.log("Hello " + someVariable)  