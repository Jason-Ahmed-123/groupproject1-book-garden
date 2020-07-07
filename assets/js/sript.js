//OPEN LIBRARY API//
var displayBooks = document.querySelector("#cardContainment")
var titleInput = document.querySelector("TitleInput");
var genreInput = document.querySelecetor("GenreInput");
var displayBooks = document.querySelector("#cardContainment")


var getBookInfo = function(titleInput) {

var openLibraryApiUrl = function(authorInput) {
    // format the github api url
    var openLibraryApiUrl = "http://openlibrary.org/query.json?type=/type/edition&authors=/authors/OL1A" + authorInput + "/search";

    // make a request to the url
    fetch(openLibraryApiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(data) {
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
    }
  };

//create form variable for form submit handler//
var authorInput = document.querySelector("AuthorInput");

var formSubmitHandler = function(event) {
    event.preventDefault();
    // var for form submit (replace username)//
    var authorInput = authorInputEl.value.trim();
      
    if (authorInput) {
        getBookInfo(authorInput.value);
        authorInput.value = "";
    } else {
    alert("Please enter author");
    }
        console.log(event);
    }; 

    //add event listener for form submit//
authorInput = addEventListener("submit", formSubmitHandler)

    //add append child?//
bookContainer.appendChild(displayBooks);

var bookDescription = function(books, authorInput) {
    var openLibraryApiUrl = "openlibrary/plugins/openlibrary/js?q=" + author + "+is:featured&sort=help-wanted-issues";
      
        fetch(apiUrl).then(function(response) {
          if (response.ok) {
            response.json().then(function(data) {
              displayRepos(data.items, author);
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
      
languageButtonsEl.addEventListener("click", buttonClickHandler);
