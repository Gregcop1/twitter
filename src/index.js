import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import moment from 'moment';
import 'moment/locale/fr';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './js/components/Home/Home';
import MyTweets from './js/components/MyTweets/MyTweets';
import reducers from './js/reducers';
import registerServiceWorker from './registerServiceWorker';
import mySaga from './js/sagas/sagas';
import Header from './js/components/Header/Header';
import './stylesheets/index.css';
import './stylesheets/components/main-layout.css';

// defines moment locale
moment.locale('fr');

// create the sagas middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <Header />
                <div className="main-container">
                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/my-tweets" component={MyTweets}/>
                    </div>
                </div>
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
