const express = require('express'); 
const graphquHTTP = require('express-graphql');

const app = express(); 

app.use('/graphql', graphquHTTP({

}));

app.listen(4000, () => {
  console.log('Now listening to PORT 4000'); 
})