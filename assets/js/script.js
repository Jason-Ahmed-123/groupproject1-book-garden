// Script file for backend codes and API stuff

// GoogleBooks Api Work

var authorInput = document.querySelector("#AuthorInput");
var titleInput = document.querySelector("#TitleInput");
var genreInput = document.querySelector("#GenreInput");



// -------Function to fetch Book Information Start-------


//var getBooks = function(response) {

// Variable for GoogleBooks API
var googleApiUrl = "https://www.googleapis.com/books/v1/volumes?q="+ authorInput +"&inauthor&key=AIzaSyCRSXdaLKLF0hPkiN03bDL9-swkrelDh8w&country=US"

// Fetching GoogleBooks API
fetch(googleApiUrl)
.then(function() {
    if(response.ok) {
        response.json().then(function(){
            displayBook();
            console.log(googleApiUrl)
        });
    } else {
        alert("Error: ");
    }
})
.catch(function(error) { 
    alert("Unable to connect")
})

    console.log(googleApiUrl);


$(document).on("click", "#btn_btn-warning", function(event){
    alert("GO");
//});
//};
//for (var i=0; i<.length;i=0)
//});
// -------Function to fetch Book Information End-------



console.log()

//bookDetails.appendChild(bookImage)

//getBooks()