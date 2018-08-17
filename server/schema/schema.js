const graphql = require("graphql");
const _ = require("lodash");
const Book = require('../models/book'); 
const Author = require('../models/author'); 

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

// books = [
//   { name: "Big red dog", genre: "kids", id: "1", authorId: "1" },
//   { name: "Metrix", genre: "action", id: "2", authorId: "3" },
//   { name: "Webbing crasher", genre: "comidy", id: "3", authorId: "2" },
//   { name: "Superman", genre: "action", id: "4", authorId: "2" },
//   { name: "Speed", genre: "rowmanes", id: "5", authorId: "2" },
//   { name: "fun in the sun", genre: "kids", id: "6", authorId: "1" }
// ];

// authors = [
//   { name: "Daniel Kapper", age: "28", id: "1" },
//   { name: "Gulcan Yayla", age: "29", id: "2" },
//   { name: "Angle Plamer", age: "52", id: "3" }
// ];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // return _.find(authors, { id: parent.authorId });
      }
    }
  })
});


const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return _.filter(books, { authorId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data for the DB/other source
        // return _.find(books, { id: args.id });
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
        resolve(parent, args) {
          // return authors
        }
      },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id });
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      }
    },
    resolve(parent, args) {
      let author = new Author({
        name: name.args, 
        age: args.age
      });
      author.save(); 
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
