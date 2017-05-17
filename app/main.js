

/*
var hello = require('./hello.js');
document.getElementById('root').appendChild(hello());
*/

import './style/app.css';
import React from 'react';
import {render} from 'react-dom';
import Hello from './hello';

render(<Hello/>,document.getElementById('root'));