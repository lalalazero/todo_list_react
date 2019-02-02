import React, { Component } from 'react'
import './style.scss'

export default class CompleteList extends Component {
    render() {
        const { complete, markImcomplete, markStar } = this.props
        return (
            <ul className='complete-list'>
                {
                    complete.map((item, index) => (
                        <li>
                            <i className='iconfont icon-Check'
                              onClick={()=>markImcomplete(item, 0)}
                            >
                            </i>
                            <div>
                                <p>{ item.value }</p>
                                <p>完成时间----</p>
                            </div>
                            {
                                item.star === 1 && <i onClick={()=>markStar(item,0)}
                                className='iconfont icon-Starlarge' />
                            }
                            {
                                item.star === 0 && <i onClick={()=>markStar(item, 1)}
                                className='iconfont icon-star'></i>
                            }
                        </li>
                    ))
                }
                
            </ul>
        )
    }
}
