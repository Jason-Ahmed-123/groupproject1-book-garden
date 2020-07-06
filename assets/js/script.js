// Script file for backend codes and API stuff

// GoogleBooks Api Work

var displayBooks = document.querySelector("#cardContainment")
var titleInput = document.querySelector("#TitleInput")

// ------- Function to fetch Book Information Start ------- (1)

var getBookInfo = function(titleInput) {

// Variable for GoogleBooks API
var googleApiUrl = "https://www.googleapis.com/books/v1/volumes?q=Frankenstein+inauthor:keyes&key=AIzaSyCRSXdaLKLF0hPkiN03bDL9-swkrelDh8w"

// ------- Fetching GoogleBooks API Start ------- (2)
fetch(googleApiUrl)
.then(function(response) {
    if(response.ok) {
        response.json().then(function(){
            displayBooks(books, titleInput);
            console.log(googleApiUrl)
        });
    } else {
        alert("Error: "); 
    }
})
    console.log(googleApiUrl);
};
// ------- Fetching GoogleBooks API End ------- (2)

// ------- Function to fetch Book Information End ------- (1)

// ------- Form button function start ------- (3)


// -------Function to fetch Book Information End-------

// ------- Display information in container start ------- (4)

var bookDescription = function(books, titleInput) {
    if(titleInput.length ===0) {
        cardContainment.textContent = "No books found";
        return;
}
};

for (var i=0; i<data.list.length;i=0) {
    var bookList = data.list[i];

    bookContainer.appendChild(displayBooks);
}

// ------- Display information in container end ------- (4)