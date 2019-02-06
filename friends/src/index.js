import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import friendRootReducer from './Reducers';

const store = createStore(
    friendRootReducer, applyMiddleware(thunk, logger)
)

ReactDOM.render(<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
