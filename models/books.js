const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors:{
    type: [String]
  },
  description:{
    type: [String]
  },
  image: {
    type: String,
    default: ""
  },
  href: {
    type: String,
    default: "",
    unique: true
  }
});

const Books = mongoose.model("Books", bookSchema);

module.exports = books;
