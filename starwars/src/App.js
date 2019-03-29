import React, { Component } from 'react';
import './App.css';
import StarWars from './components/StarWars.js'
import StarWarsJSON from './components/StarWarsJSON.json'


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: StarWarsJSON
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
