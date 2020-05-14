import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
     {      
    books {
      name 
      id
    }
  }
`;

class BookList extends Component {
  render() {
    console.log(this.props)
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

export default graphql(getBooksQuery)(BookList);
