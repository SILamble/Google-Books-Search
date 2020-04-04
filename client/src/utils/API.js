import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(req, res){
    return axios.get("https://www.googleapis.com/books/v1/volumes", {params})
    .then(results =>
      results.data.items.filter(
        result =>
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail
      )
    )
    .then(books => res.json(books))
    .catch(err => res.status(422).json(err))
  },

  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
