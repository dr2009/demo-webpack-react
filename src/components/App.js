
import React from 'react';
import './App.css';
import store from '../stores';
import Counter from './Counter';

const App = () => (
    <div className="app">
        <h2>Hello, React!</h2>
        <Counter store={store}/>
    </div>
);

export default App;