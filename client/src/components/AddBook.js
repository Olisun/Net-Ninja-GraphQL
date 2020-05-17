import React, { Component } from 'react';
import { Button, Card, Form, FormGroup } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

import { getAuthorsQuery, getBooksQuery, addBookMutation } from '../queries/Queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
  }

  displayAuthors() {
    // data from the gql query is passed down through props. 
    var data = this.props.getAuthorsQuery;
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

  submitForm(event) {
    event.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitForm.bind(this)}>
          <Form.Group className="field">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              onChange={event => this.setState({ name: event.target.value })}
            />
          </Form.Group>
          <Form.Group className="field">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              onChange={event => this.setState({ genre: event.target.value })}
            />
          </Form.Group>
          <Form.Group className="field">
            <Form.Label>Select Author</Form.Label>
            <Form.Control
              as="select"
              onChange={event => this.setState({ authorId: event.target.value })}
            >
              <option></option>
              {this.displayAuthors()}
            </Form.Control>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);