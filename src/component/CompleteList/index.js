import React, { Component } from 'react'
import './style.scss'

export default class CompleteList extends Component {
    render() {
        return (
            <ul className='complete-list'>
                <li>
                    <i className='iconfont icon-Check'></i>
                    <div>
                        <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
                            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
                        <p>完成时间 3小时以前</p>
                    </div>
                    {/* <i className='iconfont icon-star' /> */}
                    <i className='iconfont icon-Starlarge' />
                </li>
                <li>
                    <i className='iconfont icon-Check'></i>
                    <div>
                        <p>测试测试测试测试测试测试</p>
                        <p>完成时间 2天前</p>
                    </div>
                    <i className='iconfont icon-star' />
                </li>
                <li>
                    <i className='iconfont icon-Check'></i>
                    <div>
                        <p>测试测试测试测试测试测试</p>
                        <p>完成时间 一周前</p>
                    </div>
                    <i className='iconfont icon-star' />
                </li>
                <li>
                    <i className='iconfont icon-Check'></i>
                    <div>
                        <p>测试测试测试测试测试测试</p>
                        <p>完成时间 一周前</p>
                    </div>
                    <i className='iconfont icon-star' />
                </li>
                <li>
                    <i className='iconfont icon-Check'></i>
                    <div>
                        <p>测试测试测试测试测试测试</p>
                        <p>完成时间 一周前</p>
                    </div>
                    <i className='iconfont icon-star' />
                </li>
                <li>
                    <i className='iconfont icon-Check'></i>
                    <div>
                        <p>测试测试测试测试测试测试</p>
                        <p>完成时间 一周前</p>
                    </div>
                    <i className='iconfont icon-star' />
                </li>
                <li>
                    <i className='iconfont icon-Check'></i>
                    <div>
                        <p>测试测试测试测试测试测试</p>
                        <p>完成时间 一周前</p>
                    </div>
                    <i className='iconfont icon-star' />
                </li>
                <li>
                    <i className='iconfont icon-Check'></i>
                    <div>
                        <p>测试测试测试测试测试测试</p>
                        <p>完成时间 一周前</p>
                    </div>
                    <i className='iconfont icon-star' />
                </li>
            </ul>
        )
    }
}
