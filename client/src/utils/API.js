import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(req, res){
    console.log("this was the request", req)
    const queryURL = "https://www.googleapis.com/books/v1/volumes?q="+ req
    console.log ("This is the URL i am looking at", queryURL);
    return axios.get(queryURL)
    .then(res =>
      res.data.items.filter(
        res =>
          res.id &&
          res.volumeInfo.title &&
          res.volumeInfo.infoLink &&
          res.volumeInfo.authors &&
          res.volumeInfo.description &&
          res.volumeInfo.imageLinks &&
          res.volumeInfo.imageLinks.thumbnail
      ) 
    ) 
    .catch(err => res.status(422).json(err));

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
