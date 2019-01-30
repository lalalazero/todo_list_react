import React, { Component } from 'react'
import './style.scss'
import DatePicker from './../../component/DatePicker'

export default class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            due: new Date(),
            pick: false,
            hasDue: false,
            stared: false,
        }
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onKeyDown = (e) => {
        if(e.keyCode === 13) {
            if (!this.state.hasDue) {
                this.props.addTodo({
                    value: this.state.value,
                    star: this.state.stared,
                })
                
            } else {
                this.props.addTodo({
                    value: this.state.value,
                    star: this.state.stared,
                    due: this.state.due
                })
            }

            this.setState({
                value: '',
                stared: false,
                hasDue: false,
            })
        
        }
    }
    onDatePick = (date)=>{
        this.setState({
            pick: false,
            hasDue: true,
            due: date,
        })
    }

    pickDate = ()=>{
        const { pick } = this.state
        this.setState({
            pick: !pick,
            
        })
    }

    clearDate = () => {
        this.setState({
            hasDue: false,
        })
    }

    markStar = () => {
        const { stared } = this.state
        this.setState({
            stared: !stared,
        })
    }
    
    render(){
        const { value, due, pick, hasDue, stared } = this.state
        return (
            <div className='addTodo-container'>
                <i className='iconfont icon-plus'></i>
                <input placeholder='添加待办...' 
                    value={value} 
                    onChange={this.onChange} 
                    onKeyDown={this.onKeyDown}></input>
                <i className='iconfont icon-star'
                    onClick={this.markStar}
                    stared={stared ? 'yes' : 'no'}
                ></i>
                <i className='iconfont icon-canlender' 
                    hasdue={hasDue ? 'yes' : 'no'}
                    onClick={this.pickDate}></i>
                {
                    pick && <div className='datePanel'>
                                <DatePicker date={due} 
                                    clearDate={this.clearDate}
                                    hasDue={hasDue}
                                    onDatePick={this.onDatePick}></DatePicker>
                            </div>
                }
                
            </div>
            
        )
    }
}