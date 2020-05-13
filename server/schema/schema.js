const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;
const _ = require('lodash');

const Book = require('../models/book');
const Author = require('../models/Author');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      // find in the author's array the id of the author that matches with the authorId of the book in the books array.  
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId })
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      // filter all from the books array the authorId that matches the id of the author frop the authors array. 
      resolve(parent, arg) {
        return _.filter(books, { authorId: parent.id })
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // TODO query mongodb
      }
    },
    bookGenre: {
      type: new GraphQLList(BookType),
      args: {
        genre: { type: GraphQLString }
      },
      resolve(parent, args) {
        // TODO query mongodb
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // TODO query mongodb
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // TODO query mongodb
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // TODO query mongodb
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});