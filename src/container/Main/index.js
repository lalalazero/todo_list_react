import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Main extends Component {
    render(){
        const { isLogged, isLogging, user } = this.props
        const authed = ()=>{
            return(
                <div>
                    <h1>Main</h1>
                    <p>userInfo.isAuthed = {JSON.stringify(user)} </p>
                </div>
            )
        } 
        const redirect = <Redirect to={{pathname: '/login'}}></Redirect>
        return(
            isLogging ? '' : ( isLogged ? authed() : redirect)
        )
    }
}

function mapStateToProps(state){
    return {
        isLogged: state.userInfo.isLogged,
        isLogging: state.userInfo.isLogging,
        user: state.userInfo.currentUser
    }
}
export default connect(mapStateToProps)(Main)