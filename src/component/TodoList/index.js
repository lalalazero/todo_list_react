import React, { Component } from 'react'
import './style.scss'

export default class TodoList extends Component {
    
    render(){
        const { todos } = this.props
        return(
            <ul className='todo-list'>
                {
                    todos.map((todo, index) => (
                        <li>
                            <i className='iconfont icon-checkbox-unchecked'/>
                            <span>{ todo.value }</span>
                            {
                                todo.star === 1 && <i className='iconfont icon-Starlarge' />
                            }
                        </li>
                    ))
                }
            </ul>
        )
    }
}
