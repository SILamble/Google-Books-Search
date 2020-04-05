import React, { useState } from "react";
import API from "../../../utils/API";
import Jumbotron from "../../Jumbotron";
import { Container, Row, Col } from "../../Grid";
import { BooksList, BooksListItem } from "../../BooksList";

function App() {

    //book states
    const [books, setBooks] = useState([]);

     API.getSavedBooks()
            .then(res =>
              setBooks({
                books: res.data
              })
            )
            .catch(err => console.log(err));

        return (
          <div>
            <Jumbotron />
            <Container>
              <Row>
                <Col size="xs-12">
                  {!books.length ? (
                    <h1 className="text-center">No books to Display</h1>
                  ) : (
                    <BooksList>
                      {books.map(book => {
                        return (
                          <BooksListItem
                            key={book.id}
                            Id={book.id}
                            title={book.volumeInfo.title}
                            href={book.volumeInfo.infoLink}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            imageLinks={book.volumeInfo.imageLinks}
                            thumbnail={book.volumeInfo.imageLinks.thumbnail}
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
