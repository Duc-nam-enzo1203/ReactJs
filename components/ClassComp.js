import React, { Component } from "react";

export default class ClassComp extends Component {
  render() {
    return (
      <div className="alert alert-info">
        <h1>ClassComp demo</h1>
        <p>FullName: {this.props.renderFullName}</p>
        <p>Company: {this.props.renderCompany}</p>
      </div>
    );
  }
}
