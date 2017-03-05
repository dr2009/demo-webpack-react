/**
 * Created by dr2009 on 2017/3/3.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  counter: state.counter,
  restCounter: 100 - state.counter
})

@connect(mapStateToProps)
class Inner extends Component {
  render () {
    const { counter, restCounter } = this.props
    return (
      <div>
        {counter} + {restCounter} = {counter + restCounter}
      </div>
    )
  }
}

class Middle extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export { Inner, Middle }
