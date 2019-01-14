import React, { Component } from 'react';

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    componentWillReceiveProps(props){
        const { username, password } = props
        if(username && password){
            this.setState({
                username,
                password
            })
        }
        
    }
    usernameInput = (e) => {
        this.setState({
            username: e.target.value.trim()
        })
    }
    passwordInput = (e) => {
        this.setState({
            password: e.target.value.trim()
        })
    }
    onSubmit = (e)=>{
        e.preventDefault()
        const { onSubmit } = this.props
        const { username, password } = this.state
        onSubmit(username, password)
    }
    render(){
        const { username, password } = this.state
        const { submit, spin } = this.props
        return(
            <form>
                <input type='text' value={username} onInput={this.usernameInput} name='username' placeholder='username' />
                <input type='password' value={password} name='password' onInput={this.passwordInput} placeholder='password' />
                {
                    spin && <span>spin here</span>
                }
                <input type='submit' onClick={this.onSubmit} value={submit}/>
            </form>
        )
    }
}