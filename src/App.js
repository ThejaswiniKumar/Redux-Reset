import React, { Component } from "react";
import { connect } from "react-redux";
import Child from "./Child";
import AnotherChild from "./AnotherChild";

import "./App.css";

class App extends Component {
  render() {
    console.log("In the app.js", this.props.message);
    return (
      <div className="App">
        <h5>Parent Component</h5>
        <input type="text" defaultValue={this.props.message} />
        <Child />
        <AnotherChild />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state
  };
}

export default connect(mapStateToProps)(App);
