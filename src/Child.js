import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class Child extends Component {
  render() {
    return (
      <div className="child-component">
        <h5> Child Component</h5>
        <input type="text" id="myText" />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }

  handleClick() {
    this.props.dispatch({
      type: "Click",
      data: document.getElementById("myText").value
    });
  }
}

export default connect()(Child);
