import React, { useState } from "react";
import API from "../../../utils/API";
import Jumbotron from "../../Jumbotron";
import { Container, Row, Col } from "../../Grid";
import Input from "../../Input";
import Button from "../../Button";
import { BooksList, BooksListItem } from "../../BooksList";

function App() {

    //book states
    const [books, setBooks] = useState([]);
    const [bookSearch, setBookSearch] = useState("");
        
    //set search term for books
    const handleInputChange = event => {
      const { value } = event.target;
      setBookSearch(value)
    };
    
    //pass state to google API
    const handleFormSubmit = event => {
      event.preventDefault();
      API.getBooks(bookSearch)
        .then(res => setBooks(res))
        .catch(err => console.log(err));
    };

    //save books
    const handleBookSave = id => {
        const book = books.find(book => book.id === id);
    
        API.saveBook({
          googleId: book.id,
          title: book.volumeInfo.title,
          link: book.volumeInfo.infoLink,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => API.getBooks());
      };
    
  
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={bookSearch}
                        onChange={handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                          Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!books.length ? (
                <h1 className="text-center">No books to Display</h1>
              ) : (
                <BooksList>
                  {books.map(book => {
                    return (
                      <BooksListItem
                        key={book.volumeInfo.title}
                        title={book.volumeInfo.title}
                        href={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        imageLinks={book.volumeInfo.imageLinks}
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                        Button={() => (
                            <button
                              onClick={() => handleBookSave(book.id)}
                              className="btn btn-primary ml-2"
                            >
                              Save
                            </button>
                          )}
                      />
                      

                      
                    );
                  })}
                </BooksList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default App;
