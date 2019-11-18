import React, { Component } from "react";
import { Result } from "../Result";
import "./Results.css";

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="resultsBox">
        <Result
          id={this.props.Results[0].id}
          image_url={this.props.Results[0].image_url}
          location={this.props.Results[0].location}
          price={this.props.Results[0].price}
          rating={this.props.Results[0].rating}
          review_count={this.props.Results[0].review_count}
          categories={this.props.Results[0].categories}
        ></Result>
      </div>
    );
  }
}

export default Results;
