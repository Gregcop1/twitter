import React from 'react';
import ReactDOM from 'react-dom';
import Home from './js/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';

ReactDOM.render(<Home className="bar" />, document.getElementById('root'));
registerServiceWorker();
