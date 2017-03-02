import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class Counter extends Component {
    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.store.increment();
        }
    };
    incrementAsync = () => {
        setTimeout(() => {
            this.props.store.increment();
        }, 1000);
    };

    render() {
        const {count} = this.props.store;
        return (
            <p>
                Clicked: {count} times
                {' '}
                <button onClick={() => this.props.store.increment()}>
                    +
                </button>
                {' '}
                <button onClick={() => this.props.store.decrement()}>
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