import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { autoLogin } from './action/user'

const middleware = [ thunk ]
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)
console.log('index.js reducers=>',reducers)
// console.log('index.js store =>',store)
// console.log('store.dispatch =>' , store.dispatch)
console.log('index.js state => ', store.getState())

store.dispatch(autoLogin())

const Root = ({ store })=>{
    return(
       <Provider store={store}>
            <App />
        </Provider>      
    )
}

ReactDOM.render(<Root store={store}></Root>,document.getElementById('root'))
    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
