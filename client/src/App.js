import React, { Component } from 'react';

import BookList from '../src/components/BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Daniel Kapper</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
