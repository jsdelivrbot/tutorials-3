import React, { Component } from 'react';

import SearchBar from '../containers/SearchBar.js';
import WeatherList from '../containers/WeatherList.js';

export default class App extends Component {
  render() {
    return (
      <div>
          <SearchBar />
          <p></p>
          <WeatherList />
      </div>
    );
  }
}
