/**
 * Created by dr2009 on 2017/2/3.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});


@connect(mapStateToProps, mapDispatchToProps)
class Counter extends Component {

    incrementIfOdd = () => {
        if (this.props.counter % 2 !== 0) {
            this.props.actions.increment();
        }
    };

    incrementAsync = () => {
        setTimeout(this.props.actions.increment, 1000);
    };

    render() {
        const {increment, decrement} = this.props.actions;
        return (
            <p>
                Clicked: {this.props.counter} times
                {' '}
                <button onClick={increment}>
                    +
                </button>
                {' '}
                <button onClick={decrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        );
    }
}

export default Counter;