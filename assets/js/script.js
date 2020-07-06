// Script file for backend codes and API stuff

// GoogleBooks Api Work

var displayBooks = document.querySelector("#cardContainment")
var titleInput = document.querySelector("TitleInput")

// ------- Function to fetch Book Information Start ------- (1)

var getBookInfo = function(titleInput) {

// Variable for GoogleBooks API
<<<<<<< HEAD
var googleApiUrl = "https://www.googleapis.com/books/v1/volumes?q="+ authorInput +"&inauthor&key=AIzaSyCRSXdaLKLF0hPkiN03bDL9-swkrelDh8w&country=US"
=======
var googleApiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + titleInput + "&key=AIzaSyCRSXdaLKLF0hPkiN03bDL9-swkrelDh8w"
>>>>>>> feature/apidevelop

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

console.log(titleInput);

<<<<<<< HEAD
    console.log(googleApiUrl);


$(document).on("click", "#btn_btn-warning", function(event){
    alert("GO");
//});
//};
//for (var i=0; i<.length;i=0)
//});
// -------Function to fetch Book Information End-------
=======
var titleInput = document.querySelector("#booksCrit")

console.log(formSubmitHandler)

titleInput = addEventListener("submit", formSubmitHandler)

function formSubmitHandler (event) {
    event.preventDefault();

    if (titleInput.value) {
        getBookInfo(titleInput.value);
        titleInput.value="";
    } else {
        alert("Please enter a book title");
    }
    console.log(event)
}


// ------- Form button function end ------- (3)
>>>>>>> feature/apidevelop

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