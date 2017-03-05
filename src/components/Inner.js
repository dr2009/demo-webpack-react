/**
 * Created by dr2009 on 2017/3/3.
 */
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject("store") @observer
class Inner extends Component {
  render () {
    const { count, restCount, totalCount } = this.props.store
    return (
      <div>
        {count}+{restCount}={totalCount}
        <br />
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

export { Middle, Inner }
