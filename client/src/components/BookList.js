import React, { Component } from 'react';
import { Card, List, ListGroup } from 'react-bootstrap';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/Queries';

class BookList extends Component {
  displayBooks() {
    // data from the gql query is passed down through props. 
    var data = this.props.data;
    console.log(data);
    if (data.loading) {
      return (<div>Loading Books...</div>);
    } else {
      return data.books.map(book => {
        return (
          <ListGroup key={book.id}>
            <ListGroup.Item>
              <Card style={{ width: "24rem" }}>
                <Card.Body>
                  <Card.Title>{book.name}</Card.Title>
                  <Card.Title>{book.id}</Card.Title>
                  <Card.Title>{book.author.name}</Card.Title>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </ListGroup>
        );
      })
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
