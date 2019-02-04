import React, { Component } from "react";

export default class GenericComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {

    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="generic_component">
          {this.props.children}
      </div>
    );
  }
}