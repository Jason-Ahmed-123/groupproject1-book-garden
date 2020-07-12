//OPEN LIBRARY API//

var authorInput = document.querySelector("AuthorInput");
var titleInput = document.querySelector("TitleInput");
var genreInput = document.querySelecetor("GenreInput");
var repoSearchTerm = document.querySelector("#repo-search-term");

var openLibraryApiUrl = function(user) {
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

    };

//create form variable for form submot handler//



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

    //add event listener for form submit//


    //add append child?//

var getFeaturedRepos = function(language) {
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
      
languageButtonsEl.addEventListener("click", buttonClickHandler);
