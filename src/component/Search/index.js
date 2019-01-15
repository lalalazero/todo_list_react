import React, { Component } from 'react'
import './style.scss'

export default class Search extends Component {
    render(){
        return(
            <div className='search'>
                <input type='text'></input>
                <i className='iconfont icon-search'></i>
            </div>
            
        )
    }
}