//OPEN LIBRARY API//

var repoSearchTerm = document.querySelector("#repo-search-term");

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "openlibrary/plugins/openlibrary/js" + user + "/search";

    // make a request to the url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(data) {
            displayRepos(data, user);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) {
        // Notice this `.catch()` getting chained onto the end of the `.then()` method
        alert("Unable to find title/author/genre");
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

//curl http://openlibrary.org/authors/OL1A.json
//{
  //  "name": "Sachi Rautroy",
    //...
//}
//$ curl -s -H 'Accept: application/json' https://openlibrary.org/books/OL1M
//{
  //  "name": "Sachi Rautroy",
    //...
//}

/*
curl 'http://openlibrary.org/query.json?type=/type/edition&authors=/authors/OL1A'
[
    {
        "key": "/books/OL1M"
    },
    {
        "key": "/books/OL4731M"
    },
    ...
]
$ curl -H 'Accept: application/json' 'https://openlibrary.org/query?type=/type/edition&authors=/authors/OL1A'
[
    {
        "key": "/books/OL1M"
    },
    {
        "key": "/books/OL4731M"
    },
    ...
]
$ curl 'http://openlibrary.org/query.json?type=/type/edition&works=/works/OL2040129W'
[
    {
        "key": "/books/OL9770407M"
    },
    {
        "key": "/books/OL21857767M"
    },
    ...
]

/*


