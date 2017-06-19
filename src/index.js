import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import moment from 'moment';
import 'moment/locale/fr';
import Home from './js/components/Home/Home';
import reducers from './js/reducers';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';

moment.locale('fr');

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Home className="bar" />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
