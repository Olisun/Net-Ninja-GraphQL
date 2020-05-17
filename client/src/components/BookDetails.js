import React, { Component } from 'react';
import { Card, List, ListGroup } from 'react-bootstrap';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/Queries';

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <Card style={{ width: "24rem" }}>
            <Card.Body>
              <Card.Title>{book.name}</Card.Title>
              <Card.Title>{book.id}</Card.Title>
              <Card.Title>{book.author.name}</Card.Title>
              <ul className="other-books">
                {book.author.books.map(item => {
                  return <li key={item.id}>{item.name}</li>
                })}
              </ul>
            </Card.Body>
          </Card>
        </div>
      )
    } else {
      return <div>No book selected...</div>
    }
  }

  render() {
    return (
      <div id="book-details">
        {this.displayBookDetails()}
      </div>
    )
  }
}

export default graphql(getBookQuery, {
  // Making a query variable as the second parameter and passing down the propr from <BookDetails bookId={this.state.selected} />. 
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);
