import React, { Component } from 'react';
import { Card, List, ListGroup } from 'react-bootstrap';
import { graphql } from 'react-apollo';

import { getBooksQuery, getBookQuery } from '../queries/Queries';
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  displayBooks() {
    // data from the gql query is passed down through props. 
    var data = this.props.data;
    if (data.loading) {
      return (<div>Loading Books...</div>);
    } else {
      return data.books.map(book => {
        return (
          <ListGroup
            // Attaching an event handler to the list group item's book id. 
            key={book.id}
            onClick={event => {
              this.setState({
                selected: book.id
              })
            }}
          >
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
        <BookDetails bookId={this.state.selected} />
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
