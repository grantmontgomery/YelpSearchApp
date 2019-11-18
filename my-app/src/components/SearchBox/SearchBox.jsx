import React, { Component } from "react";
import { AppContext } from "../../AppContext";
import "./SearchBox.css";

require("dotenv").config();

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      Results: []
    };
  }

  updateTextInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    this.makeCall();
  };

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          return (
            <div className="searchbox">
              <form action="">
                <label htmlFor="">Search</label>
                <input
                  type="text"
                  name="term"
                  value={this.state.term}
                  onChange={e => this.updateTextInput(e)}
                />
                <br />
                <label htmlFor="">Location</label>
                <input
                  name="location"
                  type="text"
                  value={this.state.location}
                  onChange={e => this.updateTextInput(e)}
                />
                <br />
                <button onClick={e => value.makeCall(e)}>Submit</button>
              </form>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default SearchBox;
