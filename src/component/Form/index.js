import React, { Component } from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import { RAISE_MSG } from '../../constants';

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
        this.props.msg !== '' && this.props.setMsg('')
        this.setState({
            username: e.target.value.trim()
        })
    }
    passwordInput = (e) => {
        this.props.msg !== '' && this.props.setMsg('')
        this.setState({
            password: e.target.value.trim()
        })
    }
    onSubmit = (e)=>{
        e.preventDefault()
        const { onSubmit } = this.props
        const { username, password } = this.state
        if(username === '' || password === ''){
            this.props.setMsg('用户名或者密码不允许为空~')
            return;
        }
        onSubmit(username, password)
    }
    render(){
        const { username, password } = this.state
        const { submit, spin, msg } = this.props
        return(
            <div className='logIn-ct'>
                <form className='logIn-form'>
                    <h3>Welcome</h3>
                    <div className='row'>
                        <input type='text' autoComplete={'off'} value={username} onChange={this.usernameInput} name='username' placeholder='Username' />
                    </div>
                    <div className='row'>
                        <input type='password' autoComplete={'off'} value={password} name='password' onChange={this.passwordInput} placeholder='Password' />
                    </div>
                    <div className='row'>
                        <input type='submit' onClick={this.onSubmit} value={submit}/>
                    </div>
                    <div className='row link'>
                        {
                            submit === '登陆' ? <Link to='/todo/signup'>去注册账号</Link> : submit === '注册' && <Link to='/todo/login'>已有账号，去登陆</Link>
                        }
                    </div>
                    {
                        spin && <span className='iconfont icon-loading'></span>
                    }
                    {
                        <p className='errorMsg'>{msg}</p>
                    }
                    
                </form>
            </div>
        )
    }
}