import React, { Component } from 'react';
import {SearchBox} from "./components"
import {Results} from "./components"
import {AppContext} from "./AppContext"
require("dotenv").config()


class App extends Component {
    state = {  }
    render() { 
        return (
            <AppContext.Provider>
                <div>
                <SearchBox>

                </SearchBox>
                <Results>

                </Results>
            </div>
            </AppContext.Provider>
            
          );
    }
}
 
export default App;