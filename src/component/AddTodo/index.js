import React, { Component } from 'react'
import './style.scss'

export default class AddTodo extends Component {
    render(){
        return (
            <div className='addTodo-container'>
                <i className='iconfont icon-plus'></i>
                <input placeholder='添加待办...'></input>
            </div>
        )
    }
}