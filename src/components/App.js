import React from 'react';
import { hot } from 'react-hot-loader';
import DemoA from './DemoA';

import './App.css';
import './App.scss';
import './App.less';

const App = () => (
  <div className="app">
    <h2>Hello, React111111!</h2>
    <DemoA />
  </div>
);

export default hot(module)(App);
