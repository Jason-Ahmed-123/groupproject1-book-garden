var displayAuthorBooks = document.querySelector(".bookResults");
var cover_i
var getAuthorBooks = function (authorInput) {
  // format the github api url
  var openLibraryApiUrl = "http://openlibrary.org/search.json?author=" + authorInput;
  var coverImgUrl
  console.log(openLibraryApiUrl)
  fetch(openLibraryApiUrl)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        response.json().then(function (data) {
          cover_i = data.docs[0].cover_i
          coverImgUrl = "http://covers.openlibrary.org/b/id/" + cover_i + "-L.jpg";
          console.log(coverImgUrl)
          //console.log(data.docs.cover_i)
          data.docs = data.docs.slice(0, 3);
          data.docs.forEach((doc) => {
            //displayBooks(data.items, authorInput)
            let author = doc.author_name;
            let title = doc.title;

            //add fetch (add let newBook) bookImg = doc.cover_i;
            //add .then
            fetch(coverImgUrl)
              .then(function (response) {
                if (response.ok) {
                  response.json().then(function (data) {
                    data.docs = data.docs.slice(0, 3);
                    data.docs.forEach((doc) => {
                      console.log(doc)
                      cover_i = doc.cover_i;

                      let newBook = {
                        title: title,
                        author: author,
                        image: cover_i,
                      };
                      console.log(newBook)

                      var displayAuthorBooks = document.querySelector(".bookResults");
                      
                      var card = document.createElement("div");
                      card.classList.add("card");
                      displayAuthorBooks.appendChild(card);

                      var cardBody = document.createElement("div");
                      cardBody.classList.add("card-body");
                      card.appendChild(cardBody);
                      //let newImg = document.createElement('img')
                      //newImg.setAttribute('src', coverImgUrl)
                      //cardBody.appendChild(newImg)
                      //cardBody.appendChild(cardBody);

                      var tagH = document.createElement("img");
                      tagH.src = cover_i;
                      cardBody.appendChild(tagH);
                      
                      //let newBook through card body appendChild(tagH) need to go in new fetch image request
                    });
                  });
                };
              });
          });
        });
      };
    });
};

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
  getAuthorBooks(authorSearchTerm)
  console.log(authorInput)

});
