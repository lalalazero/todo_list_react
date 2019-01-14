import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../action/user';
import { Redirect, Link } from 'react-router-dom'
import Form from '../component/Form';

class Signup extends Component{
    render(){
        const { isLogged, isSignup, onSignup } = this.props
        return(
            isLogged ? <Redirect to="/"></Redirect> : <div>
                <Form onSubmit={onSignup} submit='注册' spin={isSignup}></Form>
                <Link to='/login'>已有账号，去登陆</Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        isSignup: state.userInfo.isSignup,
        isLogged: state.userInfo.isLogged,
    }
}

const mapDispatchToProps = (dispatch)=>({
    onSignup(username, password){
        dispatch(signUp(username, password))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Signup)