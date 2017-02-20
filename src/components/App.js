import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';
import * as Actions from '../actions';
import Counter from './Counter';


const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

const App = ({counter, actions}) => (
    <div className="app">
        <h2>React Counter!</h2>
        <Counter
            value={counter}
            onIncrement={actions.increment}
            onDecrement={actions.decrement}
        />
    </div>
);

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);