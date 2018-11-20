import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Robot from './Robot';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<Robot />, document.getElementById('root'));
serviceWorker.register();