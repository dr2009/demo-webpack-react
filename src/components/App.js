import React from 'react';
import {connect} from 'react-redux';

import './App.css';

import Counter from './Counter';

const mapStateToProps = state => ({
    counter: state.counter,
    restCounter: 100 - state.counter
});

@connect(mapStateToProps)
class Inner extends React.Component {
    render() {
        const {counter, restCounter} = this.props;
        return (
            <div>
                {counter}
                +
                {restCounter}
                =
                {counter + restCounter}
                <br/>
            </div>
        );
    }
}

class Middle extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const App = ({counter, actions}) => (
    <div className="app">
        <h2>React Counter!</h2>
        <Counter />
        <Middle>
            <Inner />
        </Middle>
    </div>
);

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);