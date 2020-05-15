import React, { Component } from 'react';
import { Card, List, ListGroup } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const getBooksQuery = gql`
  query {      
    books {
      name 
      id
      author {
        name
        books {
          name
        }
      }
    }
  }
`;

class BookList extends Component {
  displayBooks() {
    // data from the gql query is passed down through props. 
    var data = this.props.data;
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
