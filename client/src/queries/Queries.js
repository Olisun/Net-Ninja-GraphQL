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

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id 
      name
      genre
      author {
        id     
        name
        age
        books {
          name
          id
        }
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

const deleteBookMutation = gql`
  mutation($id: ID) {
    book(id: $id) {
      name
    }
  }
`;

export { getBooksQuery, getBookQuery, getAuthorsQuery, addBookMutation };