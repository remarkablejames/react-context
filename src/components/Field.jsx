import React, { Component } from "react";
class Field extends Component {
  state = {};
  render() {
    return (
      <div className="ui field">
        <label>Name</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
