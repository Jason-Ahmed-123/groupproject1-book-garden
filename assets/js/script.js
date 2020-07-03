// Script file for backend codes and API stuff

// GoogleBooks Api Work

//var author = document.querySelector("");
//var title = document.querySelector("");
//var genre = document.querySelector("");

// -------Function to fetch Book Information Start-------
var getBooks = function() {

// Variable for GoogleBooks API
var googleApiUrl = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyD2rj-uQGtYypreqRXJvRLLVg2sCgjhE2s"

// Fetching GoogleBooks API
fetch(googleApiUrl)
.then(function() {
    if(response.ok) {
        response.json().then(function(){
            displayBook();
            console.log()
        });
    } else {
        alert("Error: ");
    }
})
.catch(function(error) { 
    alert("Unable to connect")
})

    console.log(googleApiUrl);
};

// -------Function to fetch Book Information End-------

console.log()


var 