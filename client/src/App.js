import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProider } from "react-apollo";

// components
import BookList from "../src/components/BookList";

// Setup Apollo client
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProider client={client}>
        <div className="App">
          <h1>Daniel Kapper</h1>
          <BookList />
        </div>
      </ApolloProider>
    );
  }
}

export default App;
