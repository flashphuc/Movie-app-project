import React, { Component } from "react";

export default class AuthLayout extends Component {
  render() {
    return (
      <div>
        AuthLayout
        {this.props.children}
      </div>
    );
  }
}
