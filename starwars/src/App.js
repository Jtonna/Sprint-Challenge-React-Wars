import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList.js';

import './components/CardStyler.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // my code is below, the code above gets the array from a remote server
  //props is an obj that is passed down to a functional component through an argument

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <section className="Cards-Section">
          <div>
            <CardList starwarsCharsBanana={this.state.starwarsChars} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
