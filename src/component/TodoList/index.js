import React, { Component } from 'react'
import './style.scss'

export default class TodoList extends Component {
    
    render(){
        const { todos, markFinished, markStar } = this.props
        return(
            <ul className='todo-list'>
                {
                    todos.map((todo, index) => (
                        <li key={index}>
                            <i  onClick={()=>markFinished(todo.id, 1)}
                                className='iconfont icon-checkbox-unchecked'/>
                            <span>{ todo.value }</span>
                            <span className='due'>{ todo.due && `截止日: ${todo.due.substr(0, 10)}` }</span>
                            {
                                todo.star === 1 && <i onClick={()=>markStar(todo.id,0)}
                                className='iconfont icon-Starlarge' />
                            }
                            {
                                todo.star === 0 && <i onClick={()=>markStar(todo.id, 1)}
                                className='iconfont icon-star'></i>
                            }
                        </li>
                    ))
                }
            </ul>
        )
    }
}
