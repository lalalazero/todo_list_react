import React, { Component } from 'react'
import './style.scss'

export default class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = (e) => {
        if(e.keyCode === 13) {
            console.log('按下 anter 键..准备提交')
        }
    }
    render(){
        const { value } = this.state
        return (
            <div className='addTodo-container'>
                <i className='iconfont icon-plus'></i>
                <input placeholder='添加待办...' value={value} onChange={this.handleChange} onKeyDown={this.handleSubmit}></input>
            </div>
        )
    }
}