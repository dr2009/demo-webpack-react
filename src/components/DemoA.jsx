import React, { Component } from 'react';

class DemoA extends Component {
  componentDidCatch() {}

  render() {
    if (Math.random() - 0.5 > 0) {
      throw new Error(3);
    }
    return <div>DemoA</div>;
  }
}

export default DemoA;
