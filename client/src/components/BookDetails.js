import React, { Component } from 'react';
import { Card, List, ListGroup } from 'react-bootstrap';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/Queries';

class BookDetails extends Component {
  render() {
    return (
      <div id="book-details">
        <p>Book details</p>
      </div>
    )
  }
}

export default graphql(getBookQuery)(BookDetails);
