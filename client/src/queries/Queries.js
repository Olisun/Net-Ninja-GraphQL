import { gql } from 'apollo-boost';

const getBooksQuery = gql`
query {      
  books {
    name 
    id
    author { 
      name
    }
  }
}
`;

const getAuthorsQuery = gql`
  query {      
    authors {
      name 
      id  
    }
  }
`;

const addBookMutation = gql`
  # Passing in query variables with $
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation };