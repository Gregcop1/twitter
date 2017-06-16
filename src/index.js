import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App/App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';

ReactDOM.render(<App className="bar" />, document.getElementById('root'));
registerServiceWorker();
