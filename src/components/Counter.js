import React, { Component } from 'react'
import { observer } from 'mobx-react'

// @observer
class Counter extends Component {
  incrementIfOdd = () => {
    const { count, increment } = this.props.store
    if (count % 2 !== 0) {
      increment()
    }
  }

  incrementAsync = () => {
    const { increment } = this.props.store;
    setTimeout(() => {
      increment()
    }, 1000)
  }

  render () {
    const { count, increment, decrement } = this.props.store
    return (
      <p>
        Clicked: {count} times
        {' '}
        <button onClick={increment}> + </button>
        {' '}
        <button onClick={decrement}> - </button>
        {' '}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    )
  }
}

export default Counter
