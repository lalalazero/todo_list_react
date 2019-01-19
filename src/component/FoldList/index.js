import React, { Component } from 'react'
import './style.scss'

export default class FoldList extends Component {
    render(){
        const { onShow } = this.props
        const image = 'https://lalalazero.top/todo/selfie/my.png'
        return(
            <div className='fold-nav-layout'>
                <div name='menu' onClick={onShow}>
                    <i className='iconfont icon-cc-menu-more'></i>
                </div>
                <img src={image} alt='userimage'></img>
                <i className='iconfont icon-box'></i>
                <i className='iconfont icon-ic-today'></i>
                <div name='add'>
                    <i className='iconfont icon-plus'></i>
                </div>
            </div>
        )
        
    }
}