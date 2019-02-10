import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logIn } from '../action/user.js'
import { Redirect } from 'react-router-dom'
import { setMsg } from '../action/control'
import Form from '../component/Form/index.js';
import './login.css'

class Login extends Component {
    componentDidMount(){
        this.props.msg !== '' && this.props.setMsg('')
    }
    render(){
        console.log('Login props..',this.props)
        const { isLogging, isLogged, onLogin, msg, setMsg } = this.props
        return(
            isLogged ? <Redirect to='/todo'></Redirect> : <Form onSubmit={onLogin} 
            msg={msg}
            setMsg={setMsg}
            submit='登陆' spin={isLogging}></Form>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogin (username,password){
        dispatch(logIn(username, password))
    },
    setMsg (msg){
        dispatch(setMsg(msg))
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