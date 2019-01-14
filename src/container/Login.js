import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logIn } from '../action/user.js'
import { Redirect,Link } from 'react-router-dom'
import Form from '../component/Form/index.js';

class Login extends Component {
    render(){
        console.log('Login props..',this.props)
        const { isLogging, isLogged, onLogin } = this.props
        return(
            isLogged ? <Redirect to='/'></Redirect> : <div>
                <Form onSubmit={onLogin} submit='登陆' spin={isLogging}></Form>
                <Link to='/signup'>去注册账号</Link>
            </div> 
            
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