import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { createStore, applyMiddelware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

const middleware = [ thunk ]
const store = createStore(
    reducers,
    applyMiddelware(...middleware)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
