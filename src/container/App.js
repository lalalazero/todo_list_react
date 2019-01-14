import React, { Component } from 'react';
import './App.css';
import  Main  from './Main'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'


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
            <Route path='/signup' component={Signup}></Route>
            <Route path='/' exact component={Main}></Route>
            <Route component={notFound}></Route>
          </Switch>
        </Router>
    )
  }
}
export default App;
