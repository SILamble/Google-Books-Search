const router = require("express").Router();
const db = require("../models");

router.get("/books", (req, res) => {
  //find all books (saved to database by user)
  db.Books.find()
    .then(dbBooks => res.json(dbBooks))
    .catch(err => res.status(422).end());
});

router.post("/books", (req, res)=>
  //add a book to database
  db.Books.create(req.body)
    .then(dbBooks => res.json(dbBooks))
    .catch(err => res.status(422).json(err))
)

module.exports = router;
