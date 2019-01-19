import React, { Component } from 'react'
import AddTodo from '../../../component/AddTodo'
import TodoList from '../../../component/TodoList'
import CompleteList from '../../../component/CompleteList'
import './style.scss'

class TodoArea extends Component{
    render(){
        return(
            <div className='content-area'>
                <h2>计划</h2>
                <AddTodo></AddTodo>
                <div className='list-container'>
                    <TodoList></TodoList>
                    <span>查看已完成的事项</span>
                    <CompleteList></CompleteList>
                </div>
                
            </div>
        )
    }
}
export default TodoArea;