import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logIn } from '../action/user.js'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            password:''
        }
    }
    usernameInput = (e)=>{
        this.setState({
            username: e.target.value.trim()
        })
    }
    passwordInput = (e)=>{
        this.setState({
            password: e.target.value.trim()
        })
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const { onLogin } = this.props
        const { username, password } = this.state
        onLogin(username,password)
    }
    render(){
        console.log('Login props..',this.props)
        const { username , password } = this.state
        const { isLogging, isLogged } = this.props
        
        return(
            isLogged ? <Redirect to='/'></Redirect> : <div>{
                isLogging && <span>正在登陆中....转圈圈</span>
                }
                <form>
                    <input type='text' value={username} onInput={this.usernameInput} name='username' placeholder='username' />
                    <input type='password' value={password} name='password' onInput={this.passwordInput} placeholder='password' />
                    <input type='submit' onClick={this.onSubmit} value='submit'/>
                </form>
            </div> 
            
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogin (username,password){
        dispatch(logIn(username,password))
    }
})

function mapStateToProps(state){
    return({
        isLogging: state.userInfo.isLogging,
        isLogged: state.userInfo.isLogged
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)