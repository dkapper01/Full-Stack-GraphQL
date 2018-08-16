const graphql = require('graphql'); 
const _ = require('lodash'); 

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

books = [
  { name: "Big red dog", genre: "kids", id:"1" },
  { name: "Metrix", genre: "action", id:"2"},
  { name: "Webbing crasher", genre: "comidy", id:"3" }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }, 
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args) {
        // code to get data for the DB/other source 
        return _.find(books, {id: args.id});
        
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})
