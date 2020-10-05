import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//for allowing store access across all components
import {Provider} from 'react-redux';

//access store
import store from './redux/store'

//FOR TESTING STORE
// import {addName, removeName} from './redux/actions'
store.subscribe(() => {console.log(store.getState())})
// store.dispatch(addName("Hello"))
// store.dispatch(addName("Hello2"))
// store.dispatch(removeName(1))

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
