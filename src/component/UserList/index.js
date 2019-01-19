import React, { Component } from  'react'
import Search from '../Search';
import './style.scss'

export default class UserList extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeList: 'inbox'
        }
    }
    handleListClick = (e) => {
        const label = e.currentTarget.getAttribute('label')
        this.props.history.push({
            pathname: `/tasks/${label}`
        })
        this.setState({
            activeList: label
        })
    }
    render(){
        const { onFold } = this.props
        const { activeList } = this.state
        
        const image = 'https://lalalazero.top/todo/selfie/my.png'
        return(
            <div className='unflod-nav-layout'>
                <div name='menu'>
                    <i className='iconfont icon-cc-menu-more' onClick={onFold}></i>
                    <Search></Search>
                </div>
                
                <div name='userInfo'>
                    <img src={image} alt='userimage'/>
                    <i className='iconfont icon-bottom'></i>
                </div>
                <ul>
                    <li className={activeList === 'inbox' ? 'active' : ''} 
                        label='inbox'
                        onClick={this.handleListClick}>
                        <i className='iconfont icon-box1'></i>
                        <span>计划</span>
                    </li>
                    <li className={activeList === 'today' ? 'active' : ''}
                        label='today'
                        onClick={this.handleListClick}>
                        <i className='iconfont icon-ic-today'></i>
                        <span>今天</span>
                    </li>
                    <li className={activeList === 'xxx' ? 'active' : ''}
                        label='xxx'
                        onClick={this.handleListClick}
                    >
                        <i className='iconfont icon-box'>
                        </i>
                        <span>清单名字1清单名字1清单名字1</span>
                        <i className='iconfont icon-pen'>
                        </i>
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