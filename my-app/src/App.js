import React, { Component } from 'react';
import {SearchBox} from "./components"
// import {Results} from "./components"
// import {AppContext} from "./AppContext"
require("dotenv").config()


class App extends Component {
    constructor(props) {
        super(props);

        };
  

    render() { 
        return (
          <SearchBox>
            
          </SearchBox>
            
          );
    }
}
 
export default App;