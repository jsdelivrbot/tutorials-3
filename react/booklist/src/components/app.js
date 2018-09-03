import React, { Component } from 'react';

import BookList from '../containers/BookList.js';
import BookDetail from '../containers/BookDetail.js';

export default class App extends Component {
  render() {
    return (
      <div>
          <BookList />
          <BookDetail />
      </div>
    );
  }
}
