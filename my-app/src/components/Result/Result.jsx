import React, { Component } from "react";
import "./Result.css";

class Result extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="resultBox">
        <img src={this.props.result.image_url} className="" alt="" />
        <ul>
          <li>{this.props.result.name}</li>
          <li>{this.props.result.location.city}</li>
          <li>{this.props.result.rating}</li>
        </ul>
      </div>
    );
  }
}
export default Result;
