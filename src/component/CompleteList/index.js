import React, { Component } from 'react'
import './style.scss'

export default class CompleteList extends Component {
    render() {
        const { complete, markImcomplete, markStar } = this.props
        return (
            <ul className='complete-list'>
                {
                    complete.map((item, index) => (
                        <li key={index}>
                            <i className='iconfont icon-Check'
                              onClick={()=>markImcomplete(item.id, 0)}
                            >
                            </i>
                            <div>
                                <p>{ item.value }</p>
                                <p>完成于 { item.finished && item.finished.substr(0, 10)}</p>
                            </div>
                            {
                                item.star === 1 && <i onClick={()=>markStar(item.id,0)}
                                className='iconfont icon-Starlarge' />
                            }
                            {
                                item.star === 0 && <i onClick={()=>markStar(item.id, 1)}
                                className='iconfont icon-star'></i>
                            }
                        </li>
                    ))
                }
                
            </ul>
        )
    }
}
