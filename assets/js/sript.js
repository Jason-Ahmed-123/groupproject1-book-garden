var authorInput = document.getElementById("AuthorInput");
//var titleInput = document.querySelector("#TitleInput");
//var genreInput = document.querySelecetor("#GenreInput");
var displayBooks = document.querySelector("#cardContainment")


var getBooks = function(authorInput) {
    // format the github api url
var openLibraryApiUrl = "http://openlibrary.org/search.json?author=" + authorInput;
    
    fetch(openLibraryApiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {

          response.json().then(function(data) {
            console.log(data)

            displayBooks(data.items, authorInput)

            data.items = data.items.slice(0, 5);
            data.items.forEach((search) => {
              let author = search.docs.author_name;
              let title = search.docs.title;
              bookImg = search.docs.cover_i;

              let newBook = {
                title: title,
                author: author, 
                image: bookImg,
              };
              console.log(newBook)
            
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
        displaybook(data, authorInput);
        //displayBook(data,titleResponse);
        //newbooks[Matth.floor(Math.random * newbooks.length)]
      });

    } else {
      alert("Error: " + response.statusText);
    }
    });

    console.log(openLibraryApiUrl);
};
//create form variable for form submit handler//

console.log(authorInput);

//search btn//

let searchBtn = document.querySelector('#searchBtn')
searchBtn.addEventListener('click', (event)=> {
    let searchTerm = authorInput.value
    event.preventDefault()
    if (searchTerm.includes(" ")) {
        searchTerm = searchTerm.split(" ").join("+")
        console.log(searchTerm)
    }

    // call on the getBooks to make API request
    getBooks(authorInput)
    
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


var someVariable = "World"

console.log("Hello " + someVariable)  