import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logIn } from '../action/user.js'
import { Redirect } from 'react-router-dom'
import Form from '../component/Form/index.js';
import './login.css'

class Login extends Component {
    render(){
        console.log('Login props..',this.props)
        const { isLogging, isLogged, onLogin } = this.props
        return(
            isLogged ? <Redirect to='/'></Redirect> : <Form onSubmit={onLogin} submit='登陆' spin={isLogging}></Form>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogin (username,password){
        dispatch(logIn(username, password))
    }
})

function mapStateToProps(state){
    return({
        isLogging: state.userInfo.isLogging,
        isLogged: state.userInfo.isLogged,
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)