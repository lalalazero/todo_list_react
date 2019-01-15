import React, { Component } from  'react'
import Search from '../Search';
import './style.scss'

export default class UserList extends Component {
    render(){
        const image = 'https://lalalazero.top/todo/selfie/my.png'
        return(
            <div className='unflod-nav-layout'>
                <div name='menu'>
                    <i className='iconfont icon-cc-menu-more'></i>
                    <Search></Search>
                </div>
                
                <div>
                    <img src={image} alt='userimage'/>
                    <i className='iconfont icon-bottom'></i>
                </div>
                <ul>
                    <li>
                        <i className='iconfont icon-box'></i>
                    </li>
                    <li>
                        <i className='iconfont icon-ic-today'></i>
                    </li>
                </ul>
                <div name='add'>
                    <i className='iconfont icon-plus'></i>
                    <span>创建清单</span>
                </div>
            </div>
        )
    }
}