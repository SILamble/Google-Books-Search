import React, { useState } from "react";
import API from "../../../utils/API";
import Jumbotron from "../../Jumbotron";
import { Container, Row, Col } from "../../Grid";
import { BooksList, BooksListItem } from "../../BooksList";

function App() {

    //book states
    const [books, setBooks] = useState([]);

        React.componentDidMount(books);
      
        setBooks = () => {
          API.getSavedBooks()
            .then(res =>
              this.setState({
                books: res.data
              })
            )
            .catch(err => console.log(err));
        };
      
    
  
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
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
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
