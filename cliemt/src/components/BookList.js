import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class BookList extends Component {
  render() {
    return (
      <div>
        <ul id="book-list">
          <li>
            <Card style={{ width: "24rem" }}>
              <Card.Body>
                <Card.Title>Book Name</Card.Title>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </div>
    )
  }
}

export default BookList;
