import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css'
import { Middle, Inner } from './Inner'
import Counter from './Counter'

import reducer from '../reducers'
const store = createStore(reducer)

const App = ({ counter, actions }) => (
  <Provider store={store}>
    <div className="app">
      <h2>React Counter!</h2>
      <Counter />
      <Middle>
        <Inner />
      </Middle>
    </div>
  </Provider>
)

export default App
