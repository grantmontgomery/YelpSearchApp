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

  makeCall = event => {
    event.preventDefault();
    fetch("http://localhost:5000/", {
      params: { term: "bars", location: "los angeles" }
    })
      .then(resp => resp.json())
      .then(data => this.setState({ Results: [...data] }))
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
