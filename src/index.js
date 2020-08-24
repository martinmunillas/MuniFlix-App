import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './routes/App';
import initialState from './initialState';
import reducer from './redux/reducers'

import './assets/style/main.scss'

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
