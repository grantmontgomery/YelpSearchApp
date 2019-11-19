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
    const input = {
      term: term,
      location: location
    };
    const response = fetch("http://localhost:5000/yelpsearch/", {
      // method: "GET"
      // body: JSON.stringify(input),
      // headers: {
      //   "Content-type": "application/json",
      //   Accept: "application/json"
      // }
    });
    response
      .then(resp => resp.json())
      .then(data => console.log(data[0]))
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
