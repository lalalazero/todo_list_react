import React, { Component } from 'react'
import './style.scss'
import { DatePicker } from 'antd';

export default class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onKeyDown = (e) => {
        if(e.keyCode === 13) {
            console.log('按下 anter 键..准备提交')
        }
    }
    onDatePick = (e)=>{
        console.log('date change..', e.target.value)
    }
    render(){
        const { value } = this.state
        return (
            <div className='addTodo-container'>
                <i className='iconfont icon-plus'></i>
                <input placeholder='添加待办...' value={value} onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
                <i className='iconfont icon-star'></i>
                <i className='iconfont icon-canlender'></i>
                <div className='datePanel'>
                    这里是手写日期
                </div>
            </div>
            
        )
    }
}