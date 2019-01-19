import React, { Component } from 'react'
import './style.scss'

export default class TodoList extends Component {
    render(){
        return(
            <ul className='todo-list'>
                <li>
                    <i className='iconfont icon-checkbox-unchecked'/>
                    <span>测试啦啦啦测试啦啦啦测试啦啦啦测试啦啦啦
                    测试啦啦啦测试啦啦啦测试啦啦啦测试啦啦啦测试啦啦啦测试啦啦啦
                    测试啦啦啦测试啦啦啦测试啦啦啦测试啦啦啦测试啦啦啦
                    测试啦啦啦测试啦啦啦测试啦啦啦测试啦啦啦测试啦啦啦测试啦啦啦
                    测试啦啦啦
                    </span>
                    {/* <i className='iconfont icon-star'/> */}
                    <i className='iconfont icon-Starlarge' />
                </li>
                <li>
                    <i className='iconfont icon-checkbox-unchecked'/>
                    <span>测试啦啦啦</span>
                    <i className='iconfont icon-star' />
                </li>
            </ul>
        )
    }
}