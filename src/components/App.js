import React from 'react';
import './App.css';
import store from '../stores';
import Counter from './Counter';

import {Provider, inject, observer} from 'mobx-react';

@inject("store") @observer
class Inner extends React.Component {
    render() {
        return (
            <div>
                {this.props.store.count}
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

const App = () => (
    <div className="app">
        <h2>Hello, React!</h2>
        <Counter store={store}/>
        <Provider store={store}>
            <Middle>
                <Inner />
            </Middle>
        </Provider>
    </div>
);

export default App;