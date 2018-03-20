import React, { Component } from 'react';
import { capitalize } from 'lodash-es';
class DemoA extends Component {
  componentDidCatch(err) {
    console.log(err);
  }

  render() {
    // if (Math.random() - 0.5 > 0) {
    //   throw new Error(3);
    // }
    return <div>{capitalize('yo')}</div>;
  }
}

export default DemoA;
