//OPEN LIBRARY API//

var authorInput = document.querySelector("#AuthorInput");
var titleInput = document.querySelector("#TitleInput");
var genreInput = document.querySelecetor("#GenreInput");
var displayBooks = document.querySelector("#cardContainment")


var getBooks = function(authorInput) {
    // format the github api url
var openLibraryApiUrl = "http://openlibrary.org/api/books?bibkeys=" + authorInput + "ISBN:0451526538&callback=mycallback";
    
    fetch(openLibraryApiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {

          response.json().then(function(data) {
            console.log(data)
            data.items.forEach(book => {
              let author = book.//name from api//.authors
              bookImg = book.//add api info//

              let newBook = {
                title: title,
                author: author, 
                image: bookImg,
              }
              console.log(newBook)
            })
            displayAuthor(data, author);

              console.log(openLibraryApiUrl)
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) {
        // Notice this `.catch()` getting chained onto the end of the `.then()` method
        alert("Unable to find author");
      });
  };

//create form variable for form submot handler//

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
    getBooks(searchTerm)
    
})
//end btn//




var formSubmitHandler = function(event) {
    event.preventDefault();
    // var for form submit (replace username)//

    var username = nameInputEl.value.trim();
      
    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
    alert("Please enter title/author/genre");

    }
        console.log(event);
    }; 

    console.log(formSubmitHandler)

    //add event listener for form submit//
    //add append child?//
/*var getFeaturedRepos = function(language) {
    var apiUrl = "openlibrary/plugins/openlibrary/js?q=" + language + "+is:featured&sort=help-wanted-issues";

      
        fetch(apiUrl).then(function(response) {
          if (response.ok) {
            response.json().then(function(data) {

              displayRepos(data.items, language);

            });
          } else {
            alert("Error: " + response.statusText);
          }
        });
      };   

      //change language//
var buttonClickHandler = function(event) {
    var language = event.target.getAttribute("data-language");
        if (language) {
          getFeaturedRepos(language);
        
          // clear old content
          repoContainerEl.textContent = "";
        }
        console.log(language);

      };
      
languageButtonsEl.addEventListener("click", buttonClickHandler);*/
