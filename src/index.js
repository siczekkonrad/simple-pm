import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from "redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const INITIAL_STATE = {
    user: '',
    isLogged: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, user: action.payload, isLogged: true}
        case 'LOGOUT':
            return {...state, user: '', isLogged: false}
        default:
            return state
    }
};

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
