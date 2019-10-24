import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const INITIAL_STATE = {users:[], loggedUser: ''};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'REGISTER_USER':
            return {
                ...state,
                users: state.users.concat([action.payload])
            }
        case 'LOGIN':
            return {...state,
                    users: state.users.map((item) => {
                        if ( item.user === action.payload) {
                            item = {...item, loggedIn: true}
                        }
                        return item;
                    }),
                    loggedUser: action.payload
            };
        case 'LOGOUT':
            return {...state,
                users: state.users.map((item) => {
                    if ( item.user === action.payload) {
                        item = {...item, loggedIn: false}
                    }
                    return item;
                }),
                loggedUser: ''
            };
        // case 'ADD_TASK':
        //     return {...state,
        //             tasks: state.tasks.concat([action.payload])};
        // case 'REMOVE_TASK':
        //     return {...state,
        //             tasks: state.tasks.filter((item, index) => {
        //               return item.id !== action.payload
        //             })
        //     }
        // case 'TOGGLE_DONE':
        //     return {...state,
        //             tasks: state.tasks.map((item) => {
        //                 if (item.id === action.payload.id) {
        //                     item = {...item, isDone: action.payload.isDone, list: action.payload.list, isArchived: false}
        //                 }
        //                 return item;
        //             })
        //     }
        // case 'ARCHIVE_TASK':
        //     return {...state,
        //         tasks: state.tasks.map((item) => {
        //             if (item.id === action.payload.id) {
        //                 item = {...item, isArchived: action.payload.isArchived, list: action.payload.list}
        //             }
        //             return item;
        //         })
        //     }
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
