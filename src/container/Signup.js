import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../action/user';
import { Redirect } from 'react-router-dom'
import Form from '../component/Form';

class Signup extends Component{
    render(){
        const { isLogged, isSignup, onSignup } = this.props
        return(
            isLogged ? <Redirect to="/"></Redirect> : <Form onSubmit={onSignup} submit='注册' spin={isSignup}></Form>
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