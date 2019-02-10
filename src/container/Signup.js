import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../action/user';
import { Redirect } from 'react-router-dom'
import { setMsg } from '../action/control'
import Form from '../component/Form';

class Signup extends Component{
    componentDidMount(){
        this.props.msg !== '' && this.props.setMsg('')
    }
    render(){
        const { isLogged, isSignup, onSignup, msg, setMsg } = this.props
        return(
            isLogged ? <Redirect to="/todo"></Redirect> : <Form onSubmit={onSignup} 
            msg={msg}
            setMsg={setMsg}
            submit='注册' spin={isSignup}></Form>
        )
    }
}

function mapStateToProps(state){
    return{
        isSignup: state.userInfo.isSignup,
        isLogged: state.userInfo.isLogged,
        msg: state.control.msg
    }
}

const mapDispatchToProps = (dispatch)=>({
    onSignup(username, password){
        dispatch(signUp(username, password))
    },
    setMsg (msg){
        dispatch(setMsg(msg))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Signup)