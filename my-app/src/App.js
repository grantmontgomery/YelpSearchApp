import React, { Component } from 'react';
import {SearchBox} from "./components"
require("dotenv").config()


class App extends Component {
    state = {  }
    render() { 
        console.log(process.env.REACT_APP_YELP_API_KEY)
        return (
            <div>
                <SearchBox>
                    
                </SearchBox>
            </div>
          );
    }
}
 
export default App;