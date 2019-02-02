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
                            <i  onClick={()=>markFinished(todo, 1)}
                                className='iconfont icon-checkbox-unchecked'/>
                            <span>{ todo.value }</span>
                            {
                                todo.star === 1 && <i onClick={()=>markStar(todo,0)}
                                className='iconfont icon-Starlarge' />
                            }
                            {
                                todo.star === 0 && <i onClick={()=>markStar(todo, 1)}
                                className='iconfont icon-star'></i>
                            }
                        </li>
                    ))
                }
            </ul>
        )
    }
}
