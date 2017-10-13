import React, { Component } from 'react';

class PotentialError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  componentDidCatch(error, info) {
    this.setState({ error, info });
  }
  render() {
    if (this.state.error) {
      return <p>Error: {this.state.error.toString()}</p>;
    }
    return this.props.children;
  }
}
export default PotentialError;
