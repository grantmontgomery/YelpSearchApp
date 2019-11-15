import React, { Component } from 'react';
// import {SearchBox} from "./components"
// import {Results} from "./components"
// import {AppContext} from "./AppContext"
require("dotenv").config()


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          greeting: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
          .then(response => response.json())
          .then(state => console.log(state))
        //   .then(state => this.setState(state));
      }
    render() { 
        return (
            <div>
                  <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
            </div>
          
            
          );
    }
}
 
export default App;