import React, { Component } from 'react';
import { Button, Card, Form, FormGroup } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const getAuthorsQuery = gql`
  query {      
    authors {
      name 
      id  
    }
  }
`;

class AddBook extends Component {
  displayAuthors() {
    // data from the gql query is passed down through props. 
    var data = this.props.data;
    if (data.loading) {
      return (<option disabled>Loading Authors...</option>);
    } else {
      return data.authors.map(author => {
        return (
          <option
            key={author.id}
            value={author.id}
          >
            {author.name}
          </option>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="field">
            <Form.Label>Book Name</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="field">
            <Form.Label>Genre</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="field">
            <Form.Label>Select Author</Form.Label>
            <Form.Control as="select">
              <option></option>
              {this.displayAuthors()}
            </Form.Control>
          </Form.Group>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBook);