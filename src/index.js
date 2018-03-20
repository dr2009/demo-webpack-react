/**
 * Created by dr2009 on 2017/1/24.
 */

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const root = document.createElement('div');
document.body.appendChild(root);
render(<App />, root);
