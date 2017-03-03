import React from 'react';
import {Provider} from 'mobx-react';

import './App.css';
// store
import store from '../stores';
//
import Counter from './Counter';
import {Middle, Inner} from './Inner';

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