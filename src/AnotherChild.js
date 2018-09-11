import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class AnotherChild extends Component {
  render() {
    return (
      <div className="other-component">
        <h5>Another Child Component</h5>
        <input type="text" defaultValue={this.props.message} />
        <button onClick={this.handleReset.bind(this)}>Reset</button>
      </div>
    );
  }

  handleReset() {
    document.getElementById("myText").value = "";
    this.props.dispatch({
      type: "Reset"
    });
  }
}

function mapStateToProps(state) {
  return {
    message: state
  };
}

export default connect(mapStateToProps)(AnotherChild);
