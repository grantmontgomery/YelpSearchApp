import React, { Component } from "react";
import { SearchBox } from "./components";
import { Results } from "./components";
import { AppContext } from "./AppContext";
require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Results: [],
      setResults: this.setResults,
      makeCall: this.makeCall
    };
  }

  makeCall = (term, location) => {
    console.log(term, location);
    const input = {
      term: term,
      location: location
    };
    const response = fetch("http://localhost:5000/", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    });
    response
      .then(resp => console.log(resp))
      // .then(data => console.log(data))
      .catch(error => console.log(error.message));
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div>
          <SearchBox></SearchBox>
          <Results Results={this.state.Results}></Results>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
