import React, { Component } from 'react';
import './style.css'
import { Link } from 'react-router-dom'

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
            <div className='logIn-ct'>
                <form className='logIn-form'>
                    <h3>零清单</h3>
                    <div className='row'>
                        <input type='text' autoComplete={'off'} value={username} onInput={this.usernameInput} name='username' placeholder='username' />
                    </div>
                    <div className='row'>
                        <input type='password' autoComplete={'off'} value={password} name='password' onInput={this.passwordInput} placeholder='password' />
                    </div>
                    <div className='row'>
                        <input type='submit' onClick={this.onSubmit} value={submit}/>
                    </div>
                    <div className='row link'>
                        {
                            submit === '登陆' ? <Link to='/signup'>去注册账号</Link> : submit === '注册' && <Link to='/login'>已有账号，去登陆</Link>
                        }
                    </div>
                    {
                        spin && <span>spin here</span>
                    }
                    
                </form>
            </div>
        )
    }
}