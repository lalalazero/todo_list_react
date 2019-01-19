import React, { Component } from 'react'
import './style.css'
class TodoArea extends Component{
    render(){
        return(
            <div className='content-area'>
                <h2>计划</h2>
                <div>add to do</div>
                <ul>
                    <li>todo</li>
                </ul>
            </div>
        )
    }
}
export default TodoArea;