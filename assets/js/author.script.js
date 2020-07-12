var displayAuthorBooks = document.querySelector(".bookResults");
var cover_i
var getAuthorBooks = function (authorInput) {
  var openLibraryApiUrl = "http://openlibrary.org/search.json?author=" + authorInput;
  var coverImgUrl
  fetch(openLibraryApiUrl)
    .then(function (response) {

      if (response.ok) {
        response.json().then(function (data) {
          cover_i = data.docs[0].cover_i
          coverImgUrl = "http://covers.openlibrary.org/b/id/" + cover_i + "-M.jpg";

          var tagH = document.createElement("img");
          tagH.src = coverImgUrl;
          document.querySelector("#bookResults").appendChild(tagH)

          data.docs = data.docs.slice(0, 3);
          data.docs.forEach((doc) => {
            let author = doc.author_name;
            let title = doc.title;
          });
        });
      };
    });
};

var getGenreBooks = function (genreInput) {
  var openLibraryApiUrl = "http://openlibrary.org/search.json?author=" + genreInput;
  var coverImgUrl
  fetch(openLibraryApiUrl)
    .then(function (response) {

      if (response.ok) {
        response.json().then(function (data) {
          cover_i = data.docs[0].cover_i
          coverImgUrl = "http://covers.openlibrary.org/b/id/" + cover_i + "-M.jpg";

          var tagH = document.createElement("img");
          tagH.src = coverImgUrl;
          document.querySelector("#bookResults").appendChild(tagH)

          data.docs = data.docs.slice(0, 3);
          data.docs.forEach((doc) => {
            let author = doc.author_name;
            let title = doc.title;
            let genre = doc.subject
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
  }

  getAuthorBooks(authorSearchTerm)
});

let searchGenre = document.querySelector('#searchGenre')
searchGenre.addEventListener("click", (event) => {
  var genreInput = document.getElementById("GenreInput");
  let genreSearchTerm = genreInput.value
  event.preventDefault();
  if (genreSearchTerm.includes(" ")) {
    genreSearchTerm = genreSearchTerm.split(" ").join("+")
  }

  getGenreBooks(genreSearchTerm)
});