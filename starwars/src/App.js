import React, { Component } from 'react';
import './App.css';
import StarWars from './components/StarWars.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWars />
      </div>
    );
  }
}

export default App;
