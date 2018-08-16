const graphql = require('graphql'); 
const _ = require('lodash'); 

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

books = [
  { name: "Big red dog", genre: "kids", id:"1" },
  { name: "Metrix", genre: "action", id:"2"},
  { name: "Webbing crasher", genre: "comidy", id:"3" }
];

authors = [
  { name: "Daniel Kapper", age: "28", id: "1" }, 
  { name: "Gulcan Yayla", age: "29", id: "2" },
  { name: "Angle Plamer", age: "52", id: "3" }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }, 
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID }, 
    name: { type: GraphQLString }, 
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // code to get data for the DB/other source 
        return _.find(books, {id: args.id});
        
      }
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}}, 
      resolve(parent, args) {
          return _.find(authors, {id: args.id}); 
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})
