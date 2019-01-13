import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import  Main  from './Main'

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
const abc = ()=>{
  return(
    <div>login</div>
  )
}
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
            <Route path='/login' component={abc}></Route>
            <Route path='/signup' component={xxx}></Route>
            <Route path='/index' component={Main}></Route>
            <Route component={notFound}></Route>
          </Switch>
        </Router>
    )
  }
}
export default App;
