// polyfill stable `core-js` features - ES and web standards:
import 'core-js/stable';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = () => {
    ReactDOM.render(<App />, document.getElementById('app'));
};

render();
