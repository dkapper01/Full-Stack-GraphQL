const express = require("express");
const graphquHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

// Connects to database
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

mongoose.connect('mongodb://dan:password1@ds123822.mlab.com:23822/dan');
mongoose.connection.once('open', () => {
  console.log("database is connected"); 
})

app.use(
  "/graphql",
  graphquHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Now listening to PORT 4000");
});
