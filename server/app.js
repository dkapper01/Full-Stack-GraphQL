const express = require('express'); 
const graphquHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express(); 

app.use('/graphql', graphquHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening to PORT 4000'); 
})