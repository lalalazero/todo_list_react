import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import  Main  from './Main'
import Login from './Login'

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

const xxx = ()=>{
  return(
    <div>signup</div>
  )
}
const notFound = ()=>{
  return(
    <div>not found</div>
  )
}
class App extends Component {
  render() {
    return(
        <Router>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/signup' component={xxx}></Route>
            <Route path='/' exact component={Main}></Route>
            <Route component={notFound}></Route>
          </Switch>
        </Router>
    )
  }
}
export default App;
