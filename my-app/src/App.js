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
      setResults: this.setResults
    };
  }

  setResults = search => {
    this.setState({ Results: search });
  };

  render() {
    console.log(this.state);
    return (
      <AppContext.Provider value={this.state}>
        <div>
          <SearchBox></SearchBox>
          <Results></Results>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
