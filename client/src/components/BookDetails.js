import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="book-details">
        <p>Out put details here</p>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails);
