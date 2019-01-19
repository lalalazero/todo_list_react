import React, { Component } from 'react';
import './style.css';
import  Main  from '../Main'
import Login from '../Login'
import Signup from '../Signup'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'


const notFound = ()=>{
  return(
    <div>not found</div>
  )
}
class App extends Component {
  render() {
    return(
      <div className='app'>
        <Router>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/signup' component={Signup}></Route>
            <Route path='/' component={Main}></Route>
            <Route component={notFound}></Route>
          </Switch>
        </Router>
      </div>
        
    )
  }
}
export default App;
