import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logIn } from '../action/user.js'
import { Redirect } from 'react-router-dom'
import { clearMsg } from '../action/control'
import Form from '../component/Form/index.js';
import './login.css'
import { RAISE_MSG } from '../constants/index.js';

class Login extends Component {
    componentDidMount(){
        this.props.msg !== '' && this.props.clearMsg()
    }
    render(){
        console.log('Login props..',this.props)
        const { isLogging, isLogged, onLogin, msg } = this.props
        return(
            isLogged ? <Redirect to='/'></Redirect> : <Form onSubmit={onLogin} 
            msg={msg}
            submit='登陆' spin={isLogging}></Form>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogin (username,password){
        dispatch(logIn(username, password))
    },
    clearMsg (){
        dispatch(clearMsg)
    }
})

function mapStateToProps(state){
    return({
        isLogging: state.userInfo.isLogging,
        isLogged: state.userInfo.isLogged,
        msg: state.control.msg
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)