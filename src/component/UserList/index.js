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
        const { onFold, lists } = this.props
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
                    {
                        lists.map((list, index) => {
                            if (list.userCreate === 0) {
                                if (list.name === '计划') {
                                    return (
                                        <li key={index}
                                            className={activeList === 'inbox' ? 'active' : ''}
                                            label='inbox'
                                            onClick={this.handleListClick}
                                        >
                                            <i className='iconfont icon-box1'></i>
                                            <span>计划</span>
                                        </li>
                                    )
                                } else if (list.name === '今天') {
                                    return (
                                        <li key={index}
                                            className={activeList === 'today' ? 'active' : ''}
                                            label='today'
                                            onClick={this.handleListClick}
                                        >
                                            <i className='iconfont icon-ic-today' />
                                            <span>今天</span>
                                        </li>
                                    )
                                } else if (list.name === '星标') {
                                    return (
                                        <li key={index}
                                            className={activeList === 'star' ? 'active' : ''}
                                            label='star'
                                            onClick={this.handleListClick}
                                        >
                                            <i className='iconfont icon-star' />
                                            <span>星标</span>
                                        </li>
                                    )
                                }
                                return ''
                            } else {
                                return (
                                    <li key={index}
                                        className={activeList == list.id ? 'active' : ''}
                                        label={list.id}
                                        onClick={this.handleListClick}
                                        >
                                        <i className='iconfont icon-box'></i>
                                        <span>{list.name}</span>
                                        <i className='iconfont icon-pen'></i>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <div name='add'>
                    <i className='iconfont icon-plus'></i>
                    <span>创建清单</span>
                </div>
            </div>
        )
    }
}