import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function BooksList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BooksListItem({
  title,
  href,
  authors,
  description,
  imageLinks,
  thumbnail
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail || imageLinks} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Authors: {authors}</p>
            <p><a rel="noreferrer noopener" target="_blank" href={href}>
              See More
            </a></p>
            <h4>Description:</h4><p> {description}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
