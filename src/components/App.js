import React from 'react';
import {connect} from 'react-redux';

import './App.css';

import Counter from './Counter';

const App = ({counter, actions}) => (
    <div className="app">
        <h2>React Counter!</h2>
        <Counter />
    </div>
);

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);