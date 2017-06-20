import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import moment from 'moment';
import 'moment/locale/fr';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './js/components/Home/Home';
import MyTweets from './js/components/MyTweets/MyTweets';
import reducers from './js/reducers';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';

moment.locale('fr');

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/my-tweets" component={MyTweets}/>
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
